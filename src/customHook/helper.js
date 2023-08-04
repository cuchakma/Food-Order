export function calculateTotal( items ){
    let total = 0;
    for( let item of items ) {
        total += ( item.amount * item.price );
    }
    return total;
}