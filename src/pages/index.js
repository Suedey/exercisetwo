import Counter from "../app/components/TestingCounter";

export default function Home(){
    const projectName = "Exercise Two"
    return (
        <main>
            <h1>{projectName}</h1>
            <Counter />
        </main>
    );
}