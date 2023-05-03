export default function AirtableForm() {
    return (
      <div className="my-10">
        <h2 className="text-2xl font-bold mb-5">Submit a Shark Photo</h2>
        <iframe
          className="airtable-embed"
          src="https://airtable.com/embed/shrOlKLV9FMrv1nzu?"
          frameborder="0"
          onmousewheel=""
          width="100%"
          height="533"
          style={{ background: "transparent", border: "1px solid #ccc" }}
        ></iframe>
      </div>
    );
  }