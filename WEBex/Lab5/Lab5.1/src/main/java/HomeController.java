import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;

@WebServlet(name = "HomeController", value = "/HomeController")
public class HomeController extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
          String username = request.getParameter("lay_ten");
          if("Yukihira Yato".equals(username.trim())) {
              request.setAttribute("tenUser",username);
              RequestDispatcher requestDispatcher = request.getRequestDispatcher("View/LoginSucessfully.jsp");
              requestDispatcher.forward(request,response);
          } else {
              request.setAttribute("thongBaoLoi","Tên user hoặc mật khẩu hoặc email đăng nhập không chính xác");
              RequestDispatcher requestDispatcher = request.getRequestDispatcher("index.jsp");
              requestDispatcher.forward(request,response);
          }

    }
}