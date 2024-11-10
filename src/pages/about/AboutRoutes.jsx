import Overview from './overview';
import Scholarship from './scholarship';
import FAQs from './faqs';
import ScoreRoutes from './score/ScoreRoutes';

const AboutRoutes = [
    { path: 'overview', element: <Overview /> },
    { path: 'scholarship', element: <Scholarship /> },
    { path: 'faqs', element: <FAQs /> },
    { path: 'score', children: ScoreRoutes, },
];

export default AboutRoutes;