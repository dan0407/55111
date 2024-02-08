const array1 = [{ nombre: 'Juan', edad: 25 }, { nombre: 'María', edad: 30 }, { nombre: 'Carlos' }];

const array2 = [{ nombre: 'Ana', edad: 28 }, { nombre: 'Pedro' }, { nombre: 'Luis', edad: 22 }];

function combinarPropiedades(personas1, personas2) {
	const personasCombinadas = [];

	for (let i = 0; i < Math.max(personas1.length, personas2.length); i++) {
		const persona1 = personas1[i] || {};
		const persona2 = personas2[i] || {};

		const personaCombinada = {
			nombre: persona1.nombre || persona2.nombre || 'Desconocido',
			edad: persona1.edad || persona2.edad || 0,
		};

		personasCombinadas.push(personaCombinada);
	}

	return personasCombinadas;
}

const array3 = [
	{nombre: 'Queso', precio: 10 },
	{nombre: 'Jamón', precio: 6 },
	{nombre: 'Pan', precio: 3 },
]

function calcularPrecioTotal(array){
	let suma = 0;
	array.forEach(element => {
	suma += element.precio;
	});
	return suma;
}

const resultado = calcularPrecioTotal(array3);
console.log(resultado);
