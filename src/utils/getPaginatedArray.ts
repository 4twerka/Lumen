
function getPaginatedProducts<T>(arr: T[], pagination: number):T[][] {
    const result:T[][] = [];
    for (let i = 0; i < arr.length; i=i + pagination) {
        const part = arr.slice(i, i+pagination);
        result.push(part);        
    }
    return result;
  }

export {getPaginatedProducts};