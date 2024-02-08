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
