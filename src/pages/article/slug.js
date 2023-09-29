import { useRouter } from "next/router";
import data from "../../app/Components/data";
import styles from '../page.module.css';

export default function Article(){
    const router = useRouter();
    const slug = router.query.slug;

    const articleData = data.find((val) => val.id === slug);
    if(!articleData) return null; 
    return(
        <main className={styles.page}>
            <div>
                <p className={styles.header}></p>
                <p>{articleData.title}</p>
                <p>{new Date(articleData.publishedDate).toDateString()}</p>
                <p>{articleData.blurb}</p>
            </div>
            <div className={styles.articleParagraphText}>
                {data.map((articleTextChunk) => <p>{articleTextChunk.data}</p>)}
            </div>
        </main>
    )
}