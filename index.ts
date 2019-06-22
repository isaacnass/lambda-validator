import { ValidatorOptions, Validator } from 'class-validator'

const validator = new Validator()

export default async function ValidateBody<T extends InstanceType<any>> (targetType: T, bodyString?: string | null, opts?: ValidatorOptions) {
	const body = JSON.parse(bodyString || '')
	const input = Object.assign(new targetType(), body)
	const errors = await validator.validate(input, {
		whitelist: true,
	})
	if (errors && errors.length > 0) {
		return Promise.reject(errors)
	}

	return input
}
