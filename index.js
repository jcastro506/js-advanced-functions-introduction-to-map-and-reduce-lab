
function mapToNegativize(sourceArray){
    return sourceArray.map(x => x * -1)
} 

const mapToNoChange = sourceArray => {
    return sourceArray.map(number => number)
}

function reduceToTotal(sourceArray, starter){
    return sourceArray.reduce(number => number + number)
} 