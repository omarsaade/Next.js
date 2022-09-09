//  '/posts/1'

function Details(props) {
    return (
        <div>
            Dynamic
            <p>{props.post.title}</p>
        </div>
    )
}

export default Details;





// hol el tnen lezem yusat3malo sawa
export async function getStaticPaths(context) {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
    const data = await res.json();

    const paths = data.map(d => {
        return {
            params: { id: `${d.id}` }
        }
    })



    return {
        paths: paths,
        fallback: false,
    }
}






export async function getStaticProps(context) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
    const data = await res.json();

    return {
        props: {
            post: data
        }
    }
}






/*

ya mnesta3mel he la hala ...aw el tnen li fo2 li sawa
// ma3 kell item enta 3ayzo bybe3at request w bi jeblak el data so shu el 7all?
export async function getServerSideProps(context) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
    const data = await res.json();

    return {
        props: {
            post: data
        }
    }
}

*/