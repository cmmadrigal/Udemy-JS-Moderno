const meses = ['enero', 'febrero', 'marzo', 'abril'];

for (let i = 0; i < meses.length; i++) {
    console.log(meses[i]);
}
console.log(" ");

meses.unshift('mes 1');
meses.push('mayo');
for (let i = 0; i < meses.length; i++) {
    console.log(meses[i]);
}