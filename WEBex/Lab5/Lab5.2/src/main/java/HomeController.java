import javax.servlet.*;
import javax.servlet.annotation.*;
import javax.servlet.http.*;
import java.io.IOException;

@WebServlet(name = "HomeController", value = "/HomeController")
public class HomeController extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
          String username = request.getParameter("lay_ten");
          String password = request.getParameter("lay_pass");
          if("yukihirayato@gmail.com".equalsIgnoreCase(username.trim()) && "123456789".equals(password)) {
              request.setAttribute("tenUser",username);
              RequestDispatcher requestDispatcher = request.getRequestDispatcher("View/LoginSucessfully.jsp");
              requestDispatcher.forward(request,response);
          } else {
              request.setAttribute("thongBaoLoi","Email đăng nhập không chính xác");
              RequestDispatcher requestDispatcher = request.getRequestDispatcher("index.jsp");
              requestDispatcher.forward(request,response);
          }

    }
}