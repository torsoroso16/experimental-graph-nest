import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';
import { plainToInstance } from 'class-transformer';
import { Settings } from 'src/module/settings/entities/setting.entity';
import settingJson from 'src/module/settings/settings.json';
import paymentGatewayJson from 'src/module/payment-method/payment-gateway.json';
import { PaymentGateWay } from 'src/module/payment-method/entities/payment-gateway.entity';
import { User } from 'src/module/users/entities/user.entity';
import {
  CardElementDto,
  CreatePaymentIntentDto,
  StripeCreateCustomerDto,
} from '../dto/stripe.dto';
import {
  StripeCustomer,
  StripeCustomerList,
  StripePaymentIntent,
  StripePaymentMethod,
} from '../entity/stripe.entity';
import { Order } from '../../orders/entities/order.entity';

const paymentGateways = plainToInstance(PaymentGateWay, paymentGatewayJson as object[]);
const setting = plainToInstance(Settings, settingJson);

@Injectable()
export class StripePaymentService {
  private stripe: Stripe;
  private paymentGateways: PaymentGateWay[] = paymentGateways;
// 
  constructor() {
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2024-06-20' as any,
    });

  }

  /** Create a Stripe Customer */
  async createCustomer(
    createCustomerDto?: StripeCreateCustomerDto,
  ): Promise<StripeCustomer> {
    try {
      return await this.stripe.customers.create(createCustomerDto);
    } catch (error) {
      console.error('[Stripe] createCustomer error:', error);
      throw error;
    }
  }

  /** Retrieve a customer by ID */
  async retrieveCustomer(id: string): Promise<StripeCustomer> {
    try {
      return (await this.stripe.customers.retrieve(id)) as StripeCustomer;
    } catch (error) {
      console.error('[Stripe] retrieveCustomer error:', error);
      throw error;
    }
  }

  /** List all customers */
  async listAllCustomer(): Promise<StripeCustomerList> {
    try {
      return await this.stripe.customers.list();
    } catch (error) {
      console.error('[Stripe] listAllCustomer error:', error);
      throw error;
    }
  }

  /** Create a Payment Method (Card) */
  async createPaymentMethod(
    cardElementDto: CardElementDto,
  ): Promise<StripePaymentMethod> {
    try {
      const paymentMethod = await this.stripe.paymentMethods.create({
        type: 'card',
        card: cardElementDto,
      });
      return paymentMethod as StripePaymentMethod;
    } catch (error) {
      console.error('[Stripe] createPaymentMethod error:', error);
      throw error;
    }
  }

  /** Retrieve a Payment Method by ID */
  async retrievePaymentMethod(
    method_key: string,
  ): Promise<StripePaymentMethod> {
    try {
      return (await this.stripe.paymentMethods.retrieve(
        method_key,
      )) as StripePaymentMethod;
    } catch (error) {
      console.error('[Stripe] retrievePaymentMethod error:', error);
      throw error;
    }
  }

  /** Retrieve all payment methods for a customer */
  async retrievePaymentMethodByCustomerId(
    customer: string,
  ): Promise<StripePaymentMethod[]> {
    try {
      const { data } = await this.stripe.paymentMethods.list({
        customer,
        type: 'card',
      });
      return data as StripePaymentMethod[];
    } catch (error) {
      console.error('[Stripe] retrievePaymentMethodByCustomerId error:', error);
      throw error;
    }
  }

  /** Attach a payment method to a customer */
  async attachPaymentMethodToCustomer(
    method_id: string,
    customer_id: string,
  ): Promise<StripePaymentMethod> {
    try {
      return (await this.stripe.paymentMethods.attach(method_id, {
        customer: customer_id,
      })) as StripePaymentMethod;
    } catch (error) {
      console.error('[Stripe] attachPaymentMethodToCustomer error:', error);
      throw error;
    }
  }

  /** Detach a payment method */
  async detachPaymentMethodFromCustomer(
    method_id: string,
  ): Promise<StripePaymentMethod> {
    try {
      return (await this.stripe.paymentMethods.detach(
        method_id,
      )) as StripePaymentMethod;
    } catch (error) {
      console.error('[Stripe] detachPaymentMethodFromCustomer error:', error);
      throw error;
    }
  }

  /** Create a Payment Intent */
  async createPaymentIntent(
    createPaymentIntentDto: CreatePaymentIntentDto,
  ): Promise<StripePaymentIntent> {
    try {
      const paymentIntent = await this.stripe.paymentIntents.create(
        createPaymentIntentDto,
      );
      return paymentIntent as StripePaymentIntent;
    } catch (error) {
      console.error('[Stripe] createPaymentIntent error:', error);
      throw error;
    }
  }

  /** Retrieve a Payment Intent */
  async retrievePaymentIntent(id: string): Promise<StripePaymentIntent> {
    try {
      return (await this.stripe.paymentIntents.retrieve(
        id,
      )) as StripePaymentIntent;
    } catch (error) {
      console.error('[Stripe] retrievePaymentIntent error:', error);
      throw error;
    }
  }

  /** Generate PaymentIntent params from Order + User */
  async makePaymentIntentParam(order: Order, me: User) {
    const customerList = await this.listAllCustomer();
    let currentCustomer = customerList.data.find(
      (customer: StripeCustomer) => customer.email === me.email,
    );

    if (!currentCustomer) {
      currentCustomer = await this.createCustomer({
        name: me.name,
        email: me.email,
      });
    }

    return {
      customer: currentCustomer.id,
      amount: Math.ceil(order.paid_total * 100), // Stripe pakai sen
      currency: process.env.DEFAULT_CURRENCY || setting.options.currency || 'usd',
      payment_method_types: ['card'],
      metadata: {
        order_tracking_number: order.tracking_number,
      },
    };
  }
}
