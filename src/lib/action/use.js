import User from "../models/user.model";



import { connect } from "../mongodb/mongoosee";

export const createUser = async (
    id,
    first_name,
    last_name,
    image_url,
    email_address
) => {

    try {

        await connect();

        const user = await User.findOneAndUpdate(
            { clerkId: id },
            {   
                $set:{
                    firstName: first_name,
                    lastName: last_name,
                    profilePicture: image_url,
                    email: email_address[0].email_address,
                }

            },
            { upsert: true, new: true }
        );
    }

    catch (error) {
        console.log("Error creating user", error.message);
    }
};


export const deletUser = async (id) => {
    try {
        await connect();
        await User.findOneAndDelete({ clerkId: id });
    }
    catch (error) {
        console.log("Error deleting user", error.message);
    }

};