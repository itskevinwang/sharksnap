export default function AirtableGallery() {
    return (
      <div className="my-10">
        <h2 className="text-2xl font-bold mb-5">Shark Photo Database</h2>
        <iframe
          className="airtable-embed"
          src="https://airtable.com/embed/shrOMi5UeD9oargbT?"
          frameborder="0"
          onmousewheel=""
          width="100%"
          height="533"
          style={{ background: "transparent", border: "1px solid #ccc" }}
        ></iframe>
      </div>
    );
  }