export const products = [
	{
		id: 1,
		name: "torta no pote de maracujá + chocolate branco",
		flavors: ["maracujá", "chocolate branco"],
		description:
			"Massa de Baunilha molhadinha, creme de maracujá, mosse de chocolate branco e coulis de maracujá.",
		price: 12,
	},
	{
		id: 2,
		name: "blend de chocolate",
		flavors: ["chocolate"],
		description:
			"Torta no pote de creme de chocolate meio amargo, creme de chocolate ao leite, mousse de chocolate que são intercalados com massa molhadinha de cacau 50%.",
		price: 12,
	},
	{
		id: 3,
		name: "torta no pote de ninho com chocolate e morango",
		flavors: ["limão"],
		description: "",
		price: 12,
	},
	{
		id: 4,
		name: "torta no pote",
		flavors: ["limão"],
		description:
			"Torta no pote de creme de chocolate meio amargo, creme de chocolate ao leite, mousse de chocolate que são intercalados com massa molhadinha de cacau 50%.",
		price: 12,
	},
	{
		id: 5,
		name: "torta no pote de abacaxi com limão",
		flavors: ["abacaxi", "limão"],
		description:
			"Torta no pote de creme de chocolate meio amargo, creme de chocolate ao leite, mousse de chocolate que são intercalados com massa molhadinha de cacau 50%.",
		price: 12,
	},
	{
		id: 6,
		name: "trio de waffers",
		flavors: [
			"nutella",
			"chocolate meio amargo",
			"chocolate ao leite",
			"chocolate branco",
		],
		description:
			"caixinha com 3 barrinhas de waffer com nutella, cobertos com chocolate meio amargo, ao leite e branco",
		price: 27,
	},
	{
		id: 7,
		name: "dose extra - ninho com chocolate (180 ml)",
		flavors: ["ninho", "chocolate"],
		description: "",
		price: 20,
	},
	{
		id: 8,
		name: "dose extra - mousse de ninho (180 ml)",
		flavors: ["ninho"],
		description: "",
		price: 20,
	},
	{
		id: 9,
		name: "dose extra - meio amargo belga (180 ml)",
		flavors: ["chocolate meio amargo"],
		description: "",
		price: 21,
	},
	{
		id: 10,
		name: "dose extra - doce de leite charlotte (180 ml)",
		flavors: ["doce de leite"],
		description: "",
		price: 20,
	},
	{
		id: 11,
		name: "biscoitinho charlotte coberto com chocolate ao leite (180 g)",
		flavors: ["chocolate ao leite"],
		description:
			"biscoitinhos crocantes cobertos com chocolate ao leite. viciante e perfeito para comer vendo um filme",
		price: 27,
	},
	{
		id: 12,
		name: "biscoitinho charlotte coberto com chocolate branco (180 g)",
		flavors: ["chocolate branco"],
		description:
			"biscoitinhos crocantes cobertos com chocolate branco. viciante e perfeito para comer vendo um filme",
		price: 27,
	},
	{
		id: 13,
		name: "biscoitinho amanteigado recheado com goiabada (155 g)",
		flavors: ["goiabada"],
		description:
			"biscoitinhos crocantes cobertos com chocolate branco. viciante e perfeito para comer vendo um filme",
		price: 18,
	},
];

export interface IProduct {
	id: number;
	name: string;
	flavors: string[];
	description: string;
	price: number;
}
