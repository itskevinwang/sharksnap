export default function AboutSection() {
    return (
      <section className="flex flex-wrap mt-10">
        <div className="w-full md:w-1/2 md:pr-4">
          <img src="/shark_about_photo.png" alt="About us" className="w-full h-auto" />
        </div>
        <div className="w-full md:w-1/2 md:pl-4">
          <h3 className="text-2xl font-bold mb-5">About Us</h3>
          <p>
            Our website provides a platform for conservationists and coastal community members to come together and contribute to a growing database of shark images.

            Citizen science allows for a more collaborative approach to conservation efforts, empowering individuals to make meaningful contributions to scientific research. By sharing images of sharks and their habitats, our users are helping to build a comprehensive database that can be used to inform conservation efforts and policy decisions.

            <br></br><br></br>Our website features an Airtable database that allows users to upload, organize, and download images of sharks, including their species, location, and other relevant data. This database is accessible to the public and can be used by researchers and conservationists around the world.

            In addition to the database, SharkSnap also offers a notebook for AI image upscaling. This feature uses artificial intelligence to enhance the resolution and clarity of uploaded images, making it easier to identify species and analyze habitat data.
          </p>
        </div>
      </section>
    );
  }