/*import { Deserializable } from '../interfaces/deserializable.interface';

export class Profile implements Deserializable {
	
	public name: string = "";

	deserialize(input: any): this {

		Object.assign(this, input);
		return this;

	}

}*/


export interface Profile {
	id: string;
	name: string;
	login: string;
}