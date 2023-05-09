import { supabase } from '../utils/supabase'


const LessonDetails = ({lesson}) => {
    console.log(lesson)
    return <div>Lesson details</div>;

};


const tableName = "txnTracker"
export const getStaticPaths = async() => {
    const { data: txnTrackers } = await supabase.from(tableName).select('*')
    const paths = txnTrackers.map(({id}) => ({
        params: {
            id: id.toString()
        }
    }))
    
    return {
        paths,
        fallback: false
    };
};

const getStaticProps = async ({params: {id}}) => {
    const { data: lesson } = await supabase
        .from(tableName)
        .select('*')
        .eq('id', id)
        .single()

    return {
        props: {
            lesson,
        },
    };
};

export default LessonDetails;