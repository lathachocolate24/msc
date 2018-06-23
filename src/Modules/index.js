import studentRoutes from './Students/student.routes';

export default app => {
    app.use('/api/v1/students', studentRoutes);
};
