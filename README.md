## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:4000](http://localhost:4000) with your browser to see the result.

App has <b>3</b> main routes.

<b>/</b> <br>
<b>/people</b> <br>
<b>/people/[slug]</b> <br>
<b>/analytics</b>

The "/" (home page) route is more of a standard welcome page where users can choose to go to People page (/people route) or to Analytics page (/analytics route).

The main route /people where all the people are rendered using pagination.

Second route /people/[slug] is based upon the /people route and is home to each individual person.

Third route /analytics where graphs are displayed based on different types of calculations for all the people.
