
const Validate = (schema) => async(req,res,next) =>{
    try {
        const parseBody = await schema.parseAsync(req.body)    
        req.body = parseBody
        next()

    } catch (err) {     // this will send to error middleware and that will send to frontend if response is not ok
        const status = 422;
        const message = 'fill the input properly';
        
        const extraDetails = err.errors[0].message
     //   console.log('happening at validate',err)   // zod error will go from here
        const error ={
            status,message,extraDetails
        }   
     next(error)    //  steps are imp to follow to get error at frontend**
    }
    
    
}


module.exports = Validate
// no need of if else inside try catch