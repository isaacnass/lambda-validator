Pretty straightforward to run! 

## Installation

- `yarn add lambda-validator`
- `yarn add class-transformer`

## Usage

```import ValidateBody from 'lambda-validator'
import { Length } from 'class-validator'

// Create a class for the body and decorate it
class Body {
  @Length(5,20) name: string
}

// Example request usage
export const hello: APIGatewayProxyHandler = async (event, _context) => {
	const body = await ValidateBody(Body, event.body)

	return {
		statusCode: 200,
		body: JSON.stringify(body),
	}
}
```

## API

### Default function:
```ValidateBody<Class>(targetType: Class, bodyString?: string | null, opts?: ValidatorOptions) => Promise<Class>```
Rejects with `ValidationError[]`
