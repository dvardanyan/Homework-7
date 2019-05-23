class Author {
	constructor(name, email, gender) {
		this.name = name;
		this.email = email;
		this.gender = gender
	}

	get name() {
		return this.name;
	}
	set name(value) {
		this.name = value;
	}

	get email() {
		return this.email;
	}
	set email(value) {
		this.email = value;
	}

	get gender() {
		return this.gender;
	}
	set gender(value) {
		this.gender = value;
	}

	toString() {
		return `name: ${this.name}, email: ${this.email}, gender: ${this.gender}`;
	}
}


class Book {
	constructor(title, author, price, quantity) {
		this.title = title;
		this.author = author;
		this.price = price;
		this.quantity = quantity
	}

	get title() {
		return this.title;
	}
	set title(value) {
		this.title = value;
	}

	get author() {
		return this.author;
}
set author(value) {
		this.author = value;
	}

	get price() {
		return this.price;
	}
	set price(value) {
		this.price = value;
	}

	get quantity() {
		return this.quantity;
	}
	set quantity(value) {
		this.quantity = value;
	}

	toString() {
		return `title: ${this.title}, author: ${this.author.name}, price: $${this.price}, quantity: ${this.quantity}`;
	}
	getProfit() {
		return `${this.price * this.quantity}`;
	}
}
