// import jwt from "jsonwebtoken";

// export const authenticate = (req, res, next) => {
//     try {
//         const authHeader = req.headers.authorization;
//         if (!authHeader || !authHeader.startsWith("Bearer ")) {
//           return res.status(401).json({ message: "Token is missing or invalid" });
//         }
    
//         const token = authHeader.split(" ")[1];
//         const decoded = jwt.verify(token, process.env.SECRET_KEY);
//         req.user = decoded; 
//         next();
//       } catch (error) {
//         return res.status(403).json({ message: "Invalid or expired token" });
//       }
// };
