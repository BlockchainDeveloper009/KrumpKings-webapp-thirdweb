import { supabase } from '../utils/supabase'

export default function DisplayTxns({ txnTrackers }) {
    console.log(`--displayTxns1--`)
    console.log(`--> ${process.env.NEXT_PUBLIC_SUPABASE_URL}`)
    console.log(`--> ${process.env.NEXT_PUBLIC_SUPABASE_KEY}`)
    console.log(txnTrackers)
    return (
        <div>
            {txnTrackers.map((txn:any) =>(
                <p key={txn.id}>{txn.txnHash}</p>
            ))}
        </div>
    );
}
const tableName = "txnTracker"
export const getStaticProps = async() => {
    const { data: txnTrackers } = await supabase.from(tableName).select('*')
    console.log('query')
        console.log( txnTrackers)
    return {
        props:{
            txnTrackers,
        },
    };
};