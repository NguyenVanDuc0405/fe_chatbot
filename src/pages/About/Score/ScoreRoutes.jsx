import Score2023 from './Score2023';
import Score2022 from './Score2022';
import Score2021 from './Score2021';
import Score2020 from './Score2020';

const scoreRoutes = [
    { path: '2023', element: <Score2023 /> },
    { path: '2022', element: <Score2022 /> },
    { path: '2021', element: <Score2021 /> },
    { path: '2020', element: <Score2020 /> },
];

export default scoreRoutes;