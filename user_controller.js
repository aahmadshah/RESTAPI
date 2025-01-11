const User = require('../models/user');

// GET ROUTE
async function handlerGetAllUsers(req,res)
{

    const allDBusers=await User.find({});
    return res.json(allDBusers);
}

// GET ROUTE WITH ID
async function handlerGetUserById(req, res)

{
    const user = await User.findById(req.params.id);
    const id = Number(req.params.id);

    if (!user)
    {
        return res.status(404).json({error:'user not found'});
    }
    return res.json(user);
}

// PATCH ROUTE WITH ID

async function handlerUpdateUserById(req,res)

{
    await User.findByIdAndUpdate(req.params.id,{lastname:"Updated Name"});
    return res.json({status: "Pending "});

}
// Delete Route with ID
async function handlerDeleteUserById(req,res)

{
    await User.findByIdAndUpdate(req.params.id,{lastname:"Updated Name"});
    return res.json({status: "Pending "});

}


// POST Route

async function handlerCreateNewUser(req,res)
{
    const body = req.body;
    if (
        !body ||
        !body.first_name ||
        !body.last_name ||
        !body.email ||
        !body.gender ||
        !body.job_title )

    {
        return res.status(400).json({msg: " All Fields are required "});

    }

    const result = await User.create({
        firstName :body.first_name,
        lastName :body.last_name,
        email:body.email,
        gender:body.gender,
        jobTitle:body.job_title,

    });

    console.log("result",result);

    return res.status(201).json({msg : "successfully created",id :result._id});

}


// Exporting Functions from here to use in other JavaScript File (in /routes/user)
module.exports = {handlerGetAllUsers,
handlerGetUserById,handlerUpdateUserById,handlerDeleteUserById,handlerCreateNewUser};