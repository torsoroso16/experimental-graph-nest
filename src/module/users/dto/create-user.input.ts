import {
  InputType,
  ObjectType,
  PartialType,
  PickType,
  registerEnumType,
  Field,
} from '@nestjs/graphql';
import { User } from '../entities/user.entity';

enum Permission {
  SUPER_ADMIN = 'Super admin',
  STORE_OWNER = 'Store owner',
  STAFF = 'Staff',
  CUSTOMER = 'Customer',
}
registerEnumType(Permission, { name: 'Permission' });

@InputType()
export class RegisterInput extends PickType(User, [
  'name',
  'email',
  'password',
]) {
  @Field(() => Permission, { defaultValue: Permission.CUSTOMER })
  permission: Permission = Permission.CUSTOMER;
}

@InputType()
export class LoginInput extends PartialType(
  PickType(User, ['email', 'password']),
) {}

@InputType()
export class SocialLoginInput {
  @Field()
  provider: string;

  @Field()
  access_token: string; // atau accessToken, sesuaikan dengan kebutuhan
}

@InputType()
export class ChangePasswordInput {
  @Field()
  oldPassword: string;

  @Field()
  newPassword: string;
}

@InputType()
export class ForgetPasswordInput {
  @Field()
  email: string;
}

@InputType()
export class UpdateEmailUserInput {
  @Field()
  email: string;
}

@InputType()
export class VerifyForgetPasswordTokenInput {
  @Field()
  email: string;

  @Field()
  token: string;
}

@InputType()
export class ResetPasswordInput {
  @Field() // Sudah benar
  email: string;

  @Field() // Sudah benar
  token: string;

  @Field() // Sudah benar
  password: string;
}

@ObjectType()
export class AuthResponse {
  @Field()
  token: string;

  @Field(() => [String]) // Tipe array of string
  permissions: string[];

  @Field({ nullable: true }) // Opsional
  role?: string;
}

@ObjectType()
export class PasswordChangeResponse {
  @Field()
  success: boolean;

  @Field()
  message: string;
}

@InputType()
export class VerifyOtpInput {
  @Field()
  otp_id: string;

  @Field()
  code: string;

  @Field()
  phone_number: string;
}

@ObjectType()
export class OtpResponse {
  @Field()
  id: string;

  @Field()
  message: string;

  @Field()
  success: boolean;

  @Field()
  phone_number: string;

  @Field()
  provider: string;

  @Field()
  is_contact_exist: boolean;
}

@InputType()
export class OtpInput {
  @Field()
  phone_number: string;
}

@InputType()
export class OtpLoginInput {
  @Field()
  otp_id: string;

  @Field()
  code: string;

  @Field()
  phone_number: string;

  @Field({ nullable: true }) // Opsional
  name?: string;

  @Field({ nullable: true }) // Opsional
  email?: string;
}