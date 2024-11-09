import { Outlet } from 'react-router-dom';

function Score() {
    return (
        <div>
            <h2>Xem điểm các năm trước</h2>
            <Outlet /> {/* Hiển thị các route con của Score */}
        </div>
    );
}

export default Score;