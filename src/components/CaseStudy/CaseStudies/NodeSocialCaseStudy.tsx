import CaseStudyTemplate from "../CaseStudyTemplate";

const NodeSocialCaseStudy = () => (
  <CaseStudyTemplate
    title="Node Social"
    subtitle="A user-first social media platform"
    role="Lead Backend Developer | Project Manager"
  >
    <p>
        Node Social is a social media platform primarly focused on the user experience, aiming to bring back digital freedom. It is built with a focus on privacy and freedom of speech.
    </p>

    <h2 className="text-5xl p-10">Problem</h2>
    <p>
        The current social media landscape is dominated by platforms that prioritize profit over user experience, often leading to invasive data collection and censorship. Node Social aims to address these issues by providing a platform that respects user privacy and freedom of expression.
    </p>

    <h2 className="text-5xl p-10">Tech Stack</h2>
    <p>
        The backend was written in Golang with the Gin API framework.
        We use both RESTful and GraphQL APIs to provide flexibility for frontend developers, though, at this point in time, GraphQL usage is preferred.
    </p>
    <p className="mt-5">
        As for the database, PostgreSQL was used for performance and scalability.
        Even though Go already cached most database queries, we still used Redis for caching to further improve performance. This brought down RESTful API response times from ~190ms to ~90ms (on average; measured on the <code>/posts</code> endpoint with continous asnychronous request hammering with a Python script for up to 20,000 requests). This thought me a valuable lesson about in-memory databases.
        There were numerous instances where pgtype simply couldn't handle the type conversions we needed, so I wrote my own PostgreSQL type conversion library, which is now used in production by Node Social.
    </p>
    <p className="mt-5">
        We had to store uploaded files somewhere. Our choice of a CDN fell on Bunny.net. Now, an interesting thing happened here: the existing Bunny.net Go SDK was an incomprehensible mess, so I wrote a new one from scratch. This is how easy-now-bunny was born, a Go SDK for Bunny.net that is easy to use and understand. It is now used in production by Node Social and other projects.
    </p>
    <p className="mt-5">
        Secured authentication was achieved with JWTs (JSON Web Tokens) and password encryption/decryption using bcrypt. We ensured that there is <i>no</i> confidential information stored in plain text in the database. Additionally, secure keys are fetched from environment variables on the production server to ensure that no key is leaked.
    </p>
    <p className="mt-5">
        For local development and testing, we used Docker to containerize the application, ensuring consistency across different environments.
        And for production, the code is stored on a self-hosted Gitea instance and a Woodpecker CI pipeline is used to build and deploy the application to a self-hosted Kubernetes cluster on pushes to the main branch.
        Direct pushes to the main branch are restricted with a branch protection rule, requiring at least one code review—from a person with at least the Developer role—before merging from a pull request.
        A strict requirements for triggering CI pipelines is a verified SSH key.
        Additionally, every commit must pass a set of tests, including unit tests, integration tests, and end-to-end tests, to ensure code quality and reliability.
    </p>
    <p className="mt-5">
        I wrote a professional-grade documentation with the Astro documentation framework, plus the Starlight template (through a lot of trial and error with Sphynx, Docusaurus, and Gitbook, Astro turned out to be the most mature tool for this job). This included working with MDX, reusing and creating React components, and mapping out the project infrastructure. On top of this, auto-generated API documentation was created using Swagger from godoc styled comments for the RESTful API; and GraphQL documentation is available on the Playground.
    </p>
    <p className="mt-5">
        The frontend is built with React and TypeScript. We used the Vite build tool for fast development and production builds. To further add to this speed, the SWC TypeScript compiler was used. For interactions with the API, a custom NodeJS SDK was built (which might be released in the future!). I can't really talk about the frontend, since I haven't really touched it outside of clean-ups and security patches; but I learned HTML sanitization.
    </p>

    <h2 className="text-5xl p-10">Contribution</h2>
    <p>
        Throughout this project, I had to (and still have to) work quite a sizable team. Turns out all you need is good communication and proper guidelines for a good development environment.
    </p>

    <h2 className="text-5xl p-10">Personal Take</h2>
    <p>
        I have to admit, this was way (and is still) my most ambitious project to date. I had to learn a lot of new things, including Golang, Docker, Kubernetes, and CI/CD pipelines. I also had to learn how to work with a team of developers, which was a new experience for me. This project taught me a lot about software development, project management, and teamwork.
    </p>

    <h2 className="text-5xl p-10">Contact</h2>
    <p>
        If you got interested in Node Social, and would like to support the development of the project—either financially, or with tips—, feel free to email us at <a href="mailto:contact@nodesocial.org">contact@nodesocial.org</a>.
    </p>
  </CaseStudyTemplate>
);

export default NodeSocialCaseStudy;