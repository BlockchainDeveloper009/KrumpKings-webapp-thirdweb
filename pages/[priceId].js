import { supabase } from '../utils/supabase'
import cookie from "cookie";
import initStripe from 'stripe'

const handler = async (req,res)=> {
    const { user } = await supabase.auth.resetPasswordForEmail.getUserByCookie(req);
    if(!user) {
        return res.status(401).send("Unauthorized");
    }
    const token = cookie.parse(req.headers.cookie)["sb:token"];
    supabase.auth.session = () => ({
        access_token: token,
    });

    const {
        data: {stripe_customer},
    } = await supabase
    .from("profile")
    .select("stripe_customer")
    .eq("id", user.id)
    .single();

    const stripe = initStripe(process.env.STRIPE_SECRET_key)
    const { priceId } = req.query

    const lineItems = [{
        prce: priceId,
        quantity: 1
    }]

    const session = await stripe.checkout.sessions.create({
        customer: stripe_customer,
        mode: 'subscription',
        payment_method_types: ['card'],
        line_items: lineItems,
        success_url: 'https://localhost:3000/payment/success',
        cancel_url: 'http://localhost:3000/payment/cancelled',
    })

    res.send({
        id: session.id,
        
    });
}

export default LessonDetails;