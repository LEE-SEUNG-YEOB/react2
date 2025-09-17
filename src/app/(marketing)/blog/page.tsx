export default async function Blog() {

    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a 2-second delay

    return (
        <div>
            <h1 className="text-2xl font-bold">Blog Page</h1>
            <p>Welcome to the blog!</p>
        </div>
    )
}