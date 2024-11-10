import Score2024 from './2024';
import Score2023 from './2023';
import Score2022 from './2022';
import Score2021 from './2021';
import Score2020 from './2020';

const ScoreRoutes = [
    { path: '2024', element: <Score2024 /> },
    { path: '2023', element: <Score2023 /> },
    { path: '2022', element: <Score2022 /> },
    { path: '2021', element: <Score2021 /> },
    { path: '2020', element: <Score2020 /> },
];

export default ScoreRoutes;