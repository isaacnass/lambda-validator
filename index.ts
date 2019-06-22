import { ValidatorOptions, Validator } from 'class-validator'

type Constructor<T> = new () => T

const validator = new Validator()

export default async function ValidateBody<T>(targetType: Constructor<T>, bodyString?: string | null, opts?: ValidatorOptions): Promise<T> {
	const body = JSON.parse(bodyString || '')
	const input: T = Object.assign(new targetType(), body)
	const errors = await validator.validate(input, {
		whitelist: true,
	})
	if (errors && errors.length > 0) {
		return Promise.reject(errors)
	}

	return input
}
