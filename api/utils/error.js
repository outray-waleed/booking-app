export const createError=(status,mesage)=>{
    const err = new Error();
    err.status=status;
    err.message=mesage
    return err
}