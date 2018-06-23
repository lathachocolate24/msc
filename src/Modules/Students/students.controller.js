import HTTPStatus from 'http-status';

import Student from './student.model';

export async function getStudentsList(req, res) {
    try {
        const students = await Student.find({});
        return res.status(HTTPStatus.OK).json(students);
    } catch (error) {
        return res.status(HTTPStatus.BAD_REQUEST).json(error);
    }
}

export async function createStudent(req, res) {
    try {
        console.log(req.body);
        const student = await Student.create(req.body);
        return res.status(HTTPStatus.CREATED).json(student);
    } catch (e) {
        return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}

export async function getStudentById(req, res) {
    try {
        const student = await Student.findById(req.params.id).populate('user');
        return res.status(HTTPStatus.OK).json(student);
    } catch (err) {
        return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}

export async function getPostsList(req, res) {
    try {
        const limit = parseInt(req.query.limit, 0);
        const skip = parseInt(req.query.skip, 0);
        const posts = await Post.list({ limit: limit, skip: skip });
        return res.status(HTTPStatus.OK).json(posts);
    } catch (err) {
        return res.status(HTTPStatus.BAD_REQUEST).json(err);
    }
}
export async function updateStudent(req, res) {
    try {
        const student = await Student.findById(req.params.id);
        Object.keys(req.body).forEach(key => {
            student[key] = req.body[key];
        });

        return res.status(HTTPStatus.OK).json(await student.save());
        // return res.status(HTTPStatus.OK);
    } catch (e) {
        return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}

export async function deletePost(req, res) {
    try {
        const post = await Post.findById(req.params.id);
        console.log(post);
        if (!post.user.equals(req.user._id)) {
            return res.sendStatus(HTTPStatus.UNAUTHORIZED);
        }
        await post.remove();
        return res.sendStatus(HTTPStatus.OK);
    } catch (e) {
        return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}

export async function favoritePost(req, res) {
    try {
        const user = await User.findById(req.user._id);
        await user._favorites.posts(req.params.id);
        return res.sendStatus(HTTPStatus.OK);
    } catch (e) {
        return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}
