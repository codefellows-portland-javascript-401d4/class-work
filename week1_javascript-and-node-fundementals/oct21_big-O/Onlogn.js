const count = 100000;

const arr = [];

for ( var i = 0; i < count; i++ ) {
	arr[i] = `hello ${i}`;
}

function findDups( arr ) {
	const dups = Object.create(null);
	arr.forEach( ( each, j ) => {
		if( dups[ each ] ) return true;
		dups[ each ] = true;
	});
	return false;
}
console.log( 'count', count );
console.time( 'find dups' );
console.log( findDups( arr ) );
console.timeEnd( 'find dups' );