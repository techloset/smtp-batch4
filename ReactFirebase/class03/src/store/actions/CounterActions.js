
export const INCREMENT = "INCREAMENT"
export const DECREMENT = "DECREMENT"
export const RESET = "RESET"




export function doIncrement() {

    console.log("doIncrement action call");
    
    return {
        type: INCREMENT
    }
}

export function doDecrement(data) {
    // internet requet
    console.log("doDecrement action call with data", data);
    return {
        type: DECREMENT, 
        payload: data,
    }
}

export function doReset() {
    console.log("Reset Action Call");
    return {
        type: RESET, 
    }
}


