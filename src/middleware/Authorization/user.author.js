export const authorize =(roles=[])=>{

    return (req ,res ,next)=>
            {
                if(!req.user.role){
                    return res.status(501).json({messafe:"valid authorization"});
                }
                if(!roles.includes(req.user.role) ){
                    return res.status(501).json({messafe:"valid authorization"});
                }
                next();
            }
}