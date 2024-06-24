"use server"
import { redirect } from "next/navigation"
import { Products, Users } from "./models"
import { connectToDB } from "./utils"
import bcrypt from "bcrypt"
import { revalidatePath } from "next/cache"
import { signIn } from "@/auth"

export const addUser = async (formData) => {

    const { username, email, password, isAdmin, isActive, phone, address } = Object.fromEntries(formData);
    try {
        connectToDB();

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new Users({
            username,
            email,
            password: hashedPassword,
            isAdmin,
            isActive,
            phone,
            address

        })

        await newUser.save();
    } catch (err) {
        console.log(err);
        throw new Error("Failed to create the user");
    }
    redirect("/dashboard/users");

}


export const addProduct = async (formData) => {
    const { title, description, price, stock, color, size } = Object.fromEntries(formData);
    try {
        connectToDB();
        const newProduct = new Products({
            title,
            description,
            price,
            stock,
            color,
            size
        })

        await newProduct.save();
    } catch (err) {
        console.log(err);
        throw new Error("Failed to create the product");
    }

    redirect("/dashboard/products")
}


export const deleteUser = async (formData) => {
    const { id } = Object.fromEntries(formData);

    try {
        connectToDB();
        await Users.findByIdAndDelete(id);
    } catch (err) {
        console.log("Failed to delete");
    }

    revalidatePath("/dashboard/users")
}

export const deleteProduct = async (formData) => {
    const { id } = Object.fromEntries(formData);

    try {
        connectToDB();
        await Products.findByIdAndDelete(id);
    } catch (err) {
        console.log("Failed to delete the product item");
    }

    revalidatePath("/dashboard/products")
}


export const updateUser = async (formData) => {
    const { id, username, email, password, isAdmin, isActive, phone, address } = Object.fromEntries(formData);
    try {

        connectToDB();
        const updateField = {
            username,
            email,
            password,
            isAdmin,
            isActive,
            phone,
            address
        }

        Object.keys(updateField).forEach((key) => (updateField[key] === "" || undefined && delete updateField[key]));

        await Users.findByIdAndUpdate(id, updateField);

    } catch (err) {
        console.log(err);
        throw new Error("Errpr Failed to update user")
    }

}


export const authenticate = async (formData) => {
    const { username, password } = Object.fromEntries(formData);

    try {
        await signIn("credentials", { username, password });
    }
    catch (err) {
        if (err.message.includes("CredentialsSignin")) {
            return "Wrong Credentials"
        }
        throw err;
    }
}



