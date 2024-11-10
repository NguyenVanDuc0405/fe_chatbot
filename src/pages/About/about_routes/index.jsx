import Overview from '../overview';
import Scholarship from '../scholarship';
import FAQs from '../faqs';
import scoreRoutes from '../score/ScoreRoutes';

const aboutRoutes = [
    { path: 'overview', element: <Overview /> },
    { path: 'scholarship', element: <Scholarship /> },
    { path: 'faqs', element: <FAQs /> },
    { path: 'score', children: scoreRoutes, },
];

export default aboutRoutes;