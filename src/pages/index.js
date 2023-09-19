import Data from '../app/Components/data'
import ArticleCard from '../app/Components/ArticleCard';

export default function Home(){
    const projectName = "Exercise Two"

    return (
        <main>
            <h1>{projectName}</h1>
            <ArticleCard title="Cool Title" description={"Cool Description"}/>
        </main>
    );
}