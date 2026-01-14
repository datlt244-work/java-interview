import { Category, Question } from './types';

export const STATIC_QUESTIONS: Question[] = [
  // --- BASE QUESTIONS (1-30) ---
  {
    id: 1,
    category: "Core",
    question: "Java là gì? Đặc điểm chính của Java là gì?",
    answer: "Java là một ngôn ngữ lập trình và một nền tảng phần mềm được phát triển bởi Sun Microsystems vào những năm 1990. Một số đặc điểm chính của Java bao gồm:\n\n• Đa nền tảng (Platform Independence): Mã nguồn Java có thể chạy trên nhiều loại máy tính khác nhau mà không cần biên dịch lại.\n\n• Quản lý bộ nhớ tự động (Automatic Memory Management): Sử dụng Garbage Collection để tự động giải phóng bộ nhớ không sử dụng.\n\n• Hướng đối tượng (Object-Oriented): Java được thiết kế theo mô hình hướng đối tượng, hỗ trợ tính kế thừa, đa hình và đóng gói.",
    difficulty: "Beginner"
  },
  {
    id: 2,
    category: "Core",
    question: "Sự khác biệt giữa abstract class và interface trong Java là gì?",
    answer: "Abstract Class (Lớp trừu tượng): Đây là một lớp có từ khóa abstract được sử dụng để định nghĩa các phương thức mà các lớp con cần phải triển khai. Một lớp con chỉ có thể kế thừa từ một abstract class.\n\nInterface (Giao diện): Một interface là một tập hợp các phương thức trừu tượng và các hằng số. Một lớp có thể thực thi nhiều interface.",
    difficulty: "Intermediate"
  },
  {
    id: 3,
    category: "Core",
    question: "Khác biệt giữa == và .equals() trong Java?",
    answer: "• == so sánh xem hai đối tượng có cùng địa chỉ bộ nhớ không.\n\n• .equals() so sánh giá trị của hai đối tượng. Phương thức này thường được ghi đè để so sánh logic của đối tượng.",
    difficulty: "Beginner"
  },
  {
    id: 4,
    category: "Core",
    question: "Java Memory Management hoạt động như thế nào?",
    answer: "Java sử dụng Garbage Collection để quản lý bộ nhớ. Khi đối tượng không còn được sử dụng, Garbage Collector tự động giải phóng bộ nhớ của đối tượng đó. Điều này giúp lập trình viên không phải lo lắng về việc cấp phát và giải phóng bộ nhớ thủ công.",
    difficulty: "Intermediate"
  },
  {
    id: 5,
    category: "Core",
    question: "Tại sao Java được gọi là ngôn ngữ đa luồng (multithreaded)?",
    answer: "Java hỗ trợ việc xử lý đa luồng thông qua gói java.lang.Thread. Điều này cho phép chương trình thực thi nhiều nhiệm vụ đồng thời, tận dụng hiệu suất của hệ thống.",
    difficulty: "Intermediate"
  },
  {
    id: 6,
    category: "Core",
    question: "Làm thế nào để tạo và khởi chạy một luồng (thread) trong Java?",
    answer: "Để tạo một luồng, bạn có thể kế thừa lớp Thread hoặc triển khai giao diện Runnable, sau đó ghi đè phương thức run() để chứa công việc cần thực hiện. Sau đó, bạn có thể gọi start() để khởi động luồng.",
    difficulty: "Intermediate"
  },
  {
    id: 7,
    category: "Core",
    question: "Phạm vi (scope) của biến trong Java là gì?",
    answer: "Biến trong Java có thể có phạm vi cục bộ (local scope) khi được khai báo trong một phương thức, hoặc phạm vi toàn cục (global scope) khi được khai báo ở mức lớp.",
    difficulty: "Beginner"
  },
  {
    id: 8,
    category: "Core",
    question: "Điểm khác biệt giữa ArrayList và LinkedList trong Java là gì?",
    answer: "• ArrayList được triển khai dưới dạng mảng có thể mở rộng, cho phép truy cập nhanh đến các phần tử thông qua chỉ số.\n\n• LinkedList được triển khai dưới dạng danh sách liên kết, cho phép thao tác chèn/xóa linh hoạt hơn, nhưng truy cập ngẫu nhiên chậm hơn.",
    difficulty: "Intermediate"
  },
  {
    id: 9,
    category: "Core",
    question: "Tại sao phương thức main() luôn là static trong Java?",
    answer: "Phương thức main() luôn là static để có thể được gọi mà không cần tạo một phiên bản (instance) của lớp chứa phương thức main(). Điều này cho phép JVM chạy phương thức main() mà không cần khởi tạo đối tượng.",
    difficulty: "Beginner"
  },
  {
    id: 10,
    category: "Core",
    question: "Java có hỗ trợ đa kế thừa không?",
    answer: "Không, Java không hỗ trợ đa kế thừa cho các lớp. Một lớp chỉ có thể kế thừa từ một lớp cha duy nhất, nhưng có thể triển khai nhiều interface.",
    difficulty: "Beginner"
  },
  {
    id: 11,
    category: "OOP",
    question: "OOP là gì và tại sao nó quan trọng trong Java?",
    answer: "OOP là viết tắt của \"Object-Oriented Programming\" - một phương pháp lập trình tập trung vào việc tạo ra các đối tượng có thể tương tác với nhau. Trong Java, OOP cho phép tái sử dụng mã nguồn, tạo các đối tượng linh hoạt và dễ bảo trì, giúp tăng tính tái sử dụng và hiệu suất của ứng dụng.",
    difficulty: "Beginner"
  },
  {
    id: 12,
    category: "OOP",
    question: "Các tính chất cơ bản của OOP là gì?",
    answer: "Các tính chất cơ bản của OOP gồm: đa hình (Polymorphism), kế thừa (Inheritance), đóng gói (Encapsulation) và trừu tượng (Abstraction).",
    difficulty: "Beginner"
  },
  {
    id: 13,
    category: "OOP",
    question: "Kế thừa trong Java là gì?",
    answer: "Đây là khả năng một lớp mới (lớp con) có thể sử dụng các thuộc tính và phương thức của một lớp hiện có (lớp cha). Lớp con kế thừa từ lớp cha thông qua cơ chế kế thừa, cho phép tái sử dụng mã nguồn và xây dựng các mối quan hệ \"lớp cha - lớp con\".",
    difficulty: "Intermediate"
  },
  {
    id: 14,
    category: "OOP",
    question: "Thế nào là lớp?",
    answer: "Một lớp là một mô hình hoặc mô tả của một đối tượng. Nó định nghĩa các thuộc tính (dữ liệu) và phương thức (hành vi) của đối tượng đó.",
    difficulty: "Beginner"
  },
  {
    id: 15,
    category: "OOP",
    question: "Thế nào là đối tượng?",
    answer: "Đối tượng là một thể hiện của lớp. Nó bao gồm các thuộc tính và phương thức.",
    difficulty: "Beginner"
  },
  {
    id: 16,
    category: "OOP",
    question: "Thế nào là tính đóng gói?",
    answer: "Đóng gói là việc che giấu các thông tin quan trọng của 1 lớp. Nó được thể hiển thông qua các access modifier như private, public, default, protected.",
    difficulty: "Intermediate"
  },
  {
    id: 17,
    category: "OOP",
    question: "Thế nào là tính đa hình?",
    answer: "Tính đa hình là khi một hành động có thể được thực hiện theo nhiều cách khác nhau. Nó được thể hiện thông qua override và overload.",
    difficulty: "Intermediate"
  },
  {
    id: 18,
    category: "OOP",
    question: "Có thể sử dụng thuộc tính trong interface không?",
    answer: "Có. Thuộc tính phải là hằng số và được khai báo với từ khóa final.",
    difficulty: "Intermediate"
  },
  {
    id: 19,
    category: "OOP",
    question: "Interface có thể là final không?",
    answer: "Không. Vì cần phải có một lớp implement interface thì mới sử dụng được.",
    difficulty: "Intermediate"
  },
  {
    id: 20,
    category: "OOP",
    question: "Làm thế nào để ngăn chặn việc kế thừa một lớp trong Java?",
    answer: "Để ngăn chặn việc kế thừa một lớp trong Java, bạn có thể sử dụng từ khóa final trước tên của lớp.",
    difficulty: "Intermediate"
  },
  {
    id: 21,
    category: "Spring Boot",
    question: "Spring Boot là gì?",
    answer: "Spring Boot là một framework của Spring Framework được sử dụng để tạo ứng dụng Java dễ dàng hơn bằng cách cung cấp cấu hình mặc định và giảm đáng kể việc cấu hình thông qua các tùy chọn tự động.",
    difficulty: "Intermediate"
  },
  {
    id: 22,
    category: "Spring Boot",
    question: "Tại sao nên sử dụng Spring Boot?",
    answer: "Spring Boot cung cấp cấu hình mặc định cho các thư viện phổ biến, giảm sự phức tạp trong việc cấu hình, giúp tập trung vào việc viết mã nguồn chính và nhanh chóng phát triển ứng dụng.",
    difficulty: "Intermediate"
  },
  {
    id: 23,
    category: "Spring Boot",
    question: "Sự khác biệt giữa Spring và Spring Boot là gì?",
    answer: "Spring là một framework lớn và cung cấp nhiều tính năng, trong khi Spring Boot là một phần của Spring, tập trung vào việc giảm thiểu cấu hình và giúp tạo ra các ứng dụng nhanh chóng.",
    difficulty: "Intermediate"
  },
  {
    id: 24,
    category: "Spring Boot",
    question: "Mô hình MVC là gì trong Spring Boot?",
    answer: "Mô hình MVC (Model-View-Controller) trong Spring Boot chia ứng dụng thành ba phần: Model (dữ liệu), View (giao diện người dùng) và Controller (điều khiển luồng dữ liệu), giúp tách biệt các thành phần và dễ dàng quản lý.",
    difficulty: "Intermediate"
  },
  {
    id: 25,
    category: "Spring Boot",
    question: "Dependency Injection (DI) là gì?",
    answer: "DI là một mẫu thiết kế trong đó các phụ thuộc của một lớp được cung cấp từ bên ngoài thay vì lớp đó tự tạo ra. Trong Spring, DI giúp giảm sự phụ thuộc giữa các thành phần và dễ dàng kiểm thử.",
    difficulty: "Advanced"
  },
  {
    id: 26,
    category: "Spring Boot",
    question: "@RestController là gì?",
    answer: "@RestController là một annotation trong Spring Boot được sử dụng để đánh dấu một lớp là một controller nơi các phương thức trả về dữ liệu trực tiếp (thường là JSON) thay vì một view.",
    difficulty: "Intermediate"
  },
  {
    id: 27,
    category: "Spring Boot",
    question: "Spring Data JPA là gì?",
    answer: "Spring Data JPA là một phần của Spring Data giúp dễ dàng làm việc với cơ sở dữ liệu thông qua Java Persistence API (JPA), giảm thiểu việc viết mã truy vấn SQL.",
    difficulty: "Advanced"
  },
  {
    id: 28,
    category: "Spring Boot",
    question: "Làm thế nào để cấu hình kết nối cơ sở dữ liệu trong Spring Boot?",
    answer: "Bạn có thể cấu hình kết nối cơ sở dữ liệu trong tệp application.properties hoặc application.yml bằng cách cung cấp các thông tin như url, username, password của cơ sở dữ liệu.",
    difficulty: "Intermediate"
  },
  {
    id: 29,
    category: "Spring Boot",
    question: "Bean trong Spring là gì?",
    answer: "Trong Spring, một Bean là một đối tượng được quản lý bởi Spring IoC container. Các Bean được khởi tạo, cấu hình và quản lý bởi container.",
    difficulty: "Advanced"
  },
  {
    id: 30,
    category: "Spring Boot",
    question: "@Autowired dùng để làm gì?",
    answer: "@Autowired được sử dụng để tự động tiêm (inject) các phụ thuộc (beans) vào một lớp, giúp thực hiện Dependency Injection một cách dễ dàng.",
    difficulty: "Intermediate"
  },

  // --- ADDITIONAL QUESTIONS (31-150) ---
  {
    id: 31,
    category: "Core",
    question: "HashMap và Hashtable khác nhau như thế nào?",
    answer: "HashMap là non-synchronized và cho phép null keys và values, trong khi Hashtable là synchronized và không cho phép null. HashMap nhanh hơn Hashtable nhưng không thread-safe. Hashtable được sử dụng trong các ứng dụng multi-threaded.",
    difficulty: "Intermediate"
  },
  {
    id: 32,
    category: "Core",
    question: "Set, List, Map khác nhau như thế nào?",
    answer: "List là một collection có thứ tự, cho phép phần tử trùng lặp (ArrayList, LinkedList). Set không cho phép phần tử trùng lặp và không có thứ tự (HashSet, TreeSet). Map lưu trữ các cặp key-value (HashMap, TreeMap).",
    difficulty: "Beginner"
  },
  {
    id: 33,
    category: "Core",
    question: "Comparable và Comparator khác nhau như thế nào?",
    answer: "Comparable là interface cho phép một lớp so sánh chính nó với các đối tượng khác (compareTo method). Comparator là một interface riêng biệt cho phép tạo các bộ so sánh tùy chỉnh mà không cần thay đổi lớp gốc.",
    difficulty: "Intermediate"
  },
  {
    id: 34,
    category: "Core",
    question: "Iterator là gì và tại sao nó quan trọng?",
    answer: "Iterator là một interface cho phép duyệt qua các phần tử của một collection mà không cần biết cấu trúc bên trong của nó. Nó cung cấp các phương thức hasNext(), next(), và remove() để an toàn duyệt và xóa phần tử.",
    difficulty: "Intermediate"
  },
  {
    id: 35,
    category: "Core",
    question: "ConcurrentHashMap là gì?",
    answer: "ConcurrentHashMap là một phiên bản thread-safe của HashMap. Nó sử dụng bucket-level locking thay vì toàn bộ map locking, cho phép nhiều threads truy cập các buckets khác nhau cùng một lúc, cải thiện hiệu suất.",
    difficulty: "Advanced"
  },
  {
    id: 36,
    category: "Core",
    question: "fail-fast iterator là gì?",
    answer: "Fail-fast iterator ném ConcurrentModificationException nếu collection bị sửa đổi trong khi đang duyệt. Điều này giúp phát hiện các lỗi concurrency. ArrayList, HashMap sử dụng fail-fast iterators.",
    difficulty: "Advanced"
  },
  {
    id: 37,
    category: "Core",
    question: "TreeMap và HashMap khác nhau như thế nào?",
    answer: "HashMap không đảm bảo thứ tự, còn TreeMap lưu trữ các phần tử theo thứ tự được sắp xếp. TreeMap sử dụng Red-Black tree nên có độ phức tạp O(log n), trong khi HashMap có O(1) trung bình.",
    difficulty: "Intermediate"
  },
  {
    id: 38,
    category: "Core",
    question: "PriorityQueue là gì?",
    answer: "PriorityQueue là một queue trong đó các phần tử được xử lý theo ưu tiên của chúng thay vì theo thứ tự FIFO. Nó sử dụng heap để duy trì thứ tự ưu tiên, với độ phức tạp O(log n) cho thêm/xóa.",
    difficulty: "Intermediate"
  },
  {
    id: 39,
    category: "Core",
    question: "WeakHashMap là gì?",
    answer: "WeakHashMap là một Map sử dụng weak references cho các keys. Nếu một key không được tham chiếu từ bất kỳ đâu khác, nó có thể bị garbage collected ngay cả khi vẫn có trong map.",
    difficulty: "Advanced"
  },
  {
    id: 40,
    category: "Core",
    question: "Collections.synchronizedMap() dùng để làm gì?",
    answer: "Collections.synchronizedMap() trả về một phiên bản synchronized của Map. Tất cả các phương thức được đồng bộ hóa để thread-safe, nhưng hiệu suất thấp hơn ConcurrentHashMap.",
    difficulty: "Advanced"
  },
  {
    id: 41,
    category: "Core",
    question: "Checked exception và Unchecked exception khác nhau như thế nào?",
    answer: "Checked exception phải được catch hoặc khai báo trong method signature (IOException, SQLException). Unchecked exception (RuntimeException) không bắt buộc phải xử lý (NullPointerException, ArrayIndexOutOfBoundsException).",
    difficulty: "Beginner"
  },
  {
    id: 42,
    category: "Core",
    question: "try-catch-finally khối lệnh hoạt động như thế nào?",
    answer: "try block chứa mã có thể ném exception. catch block xử lý exception nếu có. finally block luôn thực thi bất kể có exception hay không, thường dùng để đóng resources.",
    difficulty: "Beginner"
  },
  {
    id: 43,
    category: "Core",
    question: "try-with-resources là gì?",
    answer: "try-with-resources (Java 7+) tự động đóng các resources implement AutoCloseable khi thoát khỏi try block, ngay cả khi có exception. Cú pháp: try (Resource r = new Resource()) { ... }",
    difficulty: "Intermediate"
  },
  {
    id: 44,
    category: "Core",
    question: "throw và throws khác nhau như thế nào?",
    answer: "throw được sử dụng để ném một exception cụ thể. throws được sử dụng trong method signature để khai báo rằng method có thể ném exception, để caller xử lý.",
    difficulty: "Beginner"
  },
  {
    id: 45,
    category: "Core",
    question: "Custom exception như thế nào?",
    answer: "Tạo một lớp kế thừa từ Exception hoặc RuntimeException. Thêm constructors và có thể override methods. Ví dụ: public class CustomException extends Exception { public CustomException(String message) { super(message); } }",
    difficulty: "Intermediate"
  },
  {
    id: 46,
    category: "Core",
    question: "Exception chaining là gì?",
    answer: "Exception chaining là kỹ thuật lưu trữ exception gốc khi ném exception mới, giúp theo dõi nguyên nhân gốc. Sử dụng initCause() hoặc constructor với cause parameter.",
    difficulty: "Advanced"
  },
  {
    id: 47,
    category: "Core",
    question: "StackOverflowError là gì?",
    answer: "StackOverflowError xảy ra khi stack memory bị vượt quá, thường do recursion vô hạn hoặc quá sâu. Nó là Error (không phải Exception) nên không nên catch.",
    difficulty: "Intermediate"
  },
  {
    id: 48,
    category: "Core",
    question: "OutOfMemoryError là gì?",
    answer: "OutOfMemoryError xảy ra khi JVM hết heap memory. Nguyên nhân có thể là memory leak, object quá lớn, hoặc heap size quá nhỏ. Là Error nên không nên catch.",
    difficulty: "Intermediate"
  },
  {
    id: 49,
    category: "Core",
    question: "NullPointerException cách tránh?",
    answer: "Kiểm tra null trước khi sử dụng object. Sử dụng Optional (Java 8+), Objects.requireNonNull(), hoặc null-safe operators. Tránh trả về null, sử dụng empty collections hoặc Optional thay thế.",
    difficulty: "Beginner"
  },
  {
    id: 50,
    category: "Core",
    question: "ClassCastException là gì?",
    answer: "ClassCastException xảy ra khi cố gắng cast một object sang một type không tương thích. Ví dụ: Object obj = \"string\"; Integer i = (Integer) obj; sẽ ném ClassCastException.",
    difficulty: "Beginner"
  },
  {
    id: 51,
    category: "Core",
    question: "Stream API là gì?",
    answer: "Stream API (Java 8+) cung cấp cách xử lý dữ liệu theo kiểu functional programming. Cho phép filter, map, reduce trên collections. Streams là lazy-evaluated và có thể parallel.",
    difficulty: "Intermediate"
  },
  {
    id: 52,
    category: "Core",
    question: "Intermediate operations và Terminal operations khác nhau?",
    answer: "Intermediate operations (filter, map, flatMap) trả về Stream và không thực thi ngay. Terminal operations (collect, forEach, reduce) kích hoạt thực thi và trả về kết quả cuối cùng.",
    difficulty: "Intermediate"
  },
  {
    id: 53,
    category: "Core",
    question: "map() và flatMap() khác nhau như thế nào?",
    answer: "map() áp dụng function cho mỗi phần tử và trả về Stream. flatMap() áp dụng function trả về Stream cho mỗi phần tử và flatten kết quả thành một Stream duy nhất.",
    difficulty: "Intermediate"
  },
  {
    id: 54,
    category: "Core",
    question: "Lambda expression là gì?",
    answer: "Lambda expression là một cách viết anonymous functions ngắn gọn (Java 8+). Cú pháp: (parameters) -> { body }. Ví dụ: (x, y) -> x + y. Giúp code ngắn gọn và dễ đọc hơn.",
    difficulty: "Beginner"
  },
  {
    id: 55,
    category: "Core",
    question: "Functional interface là gì?",
    answer: "Functional interface là interface chỉ có một abstract method. Có thể sử dụng lambda expression để implement. Ví dụ: Runnable, Callable, Comparator. Có thể đánh dấu với @FunctionalInterface.",
    difficulty: "Intermediate"
  },
  {
    id: 56,
    category: "Core",
    question: "Method reference là gì?",
    answer: "Method reference là cách viết lambda expression ngắn gọn hơn bằng cách tham chiếu đến một method. Cú pháp: ClassName::methodName. Ví dụ: System.out::println thay vì x -> System.out.println(x).",
    difficulty: "Intermediate"
  },
  {
    id: 57,
    category: "Core",
    question: "Optional là gì?",
    answer: "Optional (Java 8+) là một container có thể chứa hoặc không chứa một non-null value. Giúp tránh NullPointerException. Có các method: isPresent(), get(), orElse(), ifPresent(), map().",
    difficulty: "Intermediate"
  },
  {
    id: 58,
    category: "Core",
    question: "Parallel streams là gì?",
    answer: "Parallel streams xử lý dữ liệu song song sử dụng multiple threads. Tạo bằng stream.parallel(). Hiệu quả cho dữ liệu lớn nhưng có overhead, không nên dùng cho dữ liệu nhỏ.",
    difficulty: "Advanced"
  },
  {
    id: 59,
    category: "Core",
    question: "collect() method dùng để làm gì?",
    answer: "collect() là terminal operation chuyển đổi Stream thành collection (List, Set, Map). Sử dụng Collectors: collect(Collectors.toList()), collect(Collectors.groupingBy(...)), etc.",
    difficulty: "Intermediate"
  },
  {
    id: 60,
    category: "Core",
    question: "reduce() method là gì?",
    answer: "reduce() là terminal operation kết hợp các phần tử của Stream thành một giá trị duy nhất. Ví dụ: stream.reduce(0, (a, b) -> a + b) tính tổng. Có thể trả về Optional.",
    difficulty: "Intermediate"
  },
  {
    id: 61,
    category: "Core",
    question: "synchronized keyword là gì?",
    answer: "synchronized keyword được sử dụng để đồng bộ hóa access đến shared resources. Có thể dùng trên methods hoặc blocks. Chỉ một thread có thể thực thi synchronized code cùng một lúc.",
    difficulty: "Intermediate"
  },
  {
    id: 62,
    category: "Core",
    question: "volatile keyword là gì?",
    answer: "volatile keyword đảm bảo rằng một variable được đọc từ main memory chứ không phải từ cache. Giúp tránh visibility issues trong multi-threading nhưng không đảm bảo atomicity.",
    difficulty: "Advanced"
  },
  {
    id: 63,
    category: "Core",
    question: "Deadlock là gì?",
    answer: "Deadlock xảy ra khi hai hoặc nhiều threads chờ đợi lẫn nhau để giải phóng locks, dẫn đến chương trình bị treo. Tránh bằng cách: giữ locks ngắn, tránh nested locks, hoặc sử dụng timeout.",
    difficulty: "Advanced"
  },
  {
    id: 64,
    category: "Core",
    question: "Thread pool là gì?",
    answer: "Thread pool là một tập hợp các threads được tạo sẵn để xử lý tasks. Giúp tránh overhead của việc tạo/hủy threads liên tục. ExecutorService cung cấp thread pools (Executors.newFixedThreadPool, newCachedThreadPool).",
    difficulty: "Intermediate"
  },
  {
    id: 65,
    category: "Core",
    question: "Future và Callable là gì?",
    answer: "Callable là interface tương tự Runnable nhưng có thể trả về kết quả và ném exception. Future đại diện cho kết quả của một async computation. Có thể check status, get result, hoặc cancel task.",
    difficulty: "Intermediate"
  },
  {
    id: 66,
    category: "Core",
    question: "CountDownLatch là gì?",
    answer: "CountDownLatch là một synchronization aid cho phép một hoặc nhiều threads chờ đợi cho đến khi một tập hợp các operations hoàn thành. Sử dụng countDown() để giảm counter, await() để chờ.",
    difficulty: "Advanced"
  },
  {
    id: 67,
    category: "Core",
    question: "CyclicBarrier là gì?",
    answer: "CyclicBarrier cho phép một tập hợp các threads chờ lẫn nhau tại một điểm barrier. Khi tất cả threads đến barrier, chúng được release cùng lúc. Có thể tái sử dụng (cyclic).",
    difficulty: "Advanced"
  },
  {
    id: 68,
    category: "Core",
    question: "Semaphore là gì?",
    answer: "Semaphore duy trì một tập hợp các permits. acquire() lấy một permit, release() trả lại một permit. Giới hạn số threads có thể truy cập một resource cùng một lúc.",
    difficulty: "Advanced"
  },
  {
    id: 69,
    category: "Core",
    question: "ReentrantLock là gì?",
    answer: "ReentrantLock là một lock có thể được acquire nhiều lần bởi cùng một thread. Cung cấp nhiều tính năng hơn synchronized: tryLock(), lockInterruptibly(), fair locking.",
    difficulty: "Advanced"
  },
  {
    id: 70,
    category: "Core",
    question: "wait(), notify(), notifyAll() là gì?",
    answer: "Các methods này được sử dụng để inter-thread communication. wait() làm thread chờ, notify() đánh thức một thread chờ, notifyAll() đánh thức tất cả. Phải được gọi trong synchronized context.",
    difficulty: "Advanced"
  },
  {
    id: 71,
    category: "Spring Boot",
    question: "Spring Boot Starter là gì?",
    answer: "Spring Boot Starters là các dependency descriptors giúp đơn giản hóa Maven configuration. Chúng tự động pull các dependencies liên quan. Ví dụ: spring-boot-starter-web, spring-boot-starter-data-jpa.",
    difficulty: "Beginner"
  },
  {
    id: 72,
    category: "Spring Boot",
    question: "Auto-configuration trong Spring Boot là gì?",
    answer: "Auto-configuration tự động cấu hình Spring application dựa trên jar dependencies trên classpath. Được enable bằng @EnableAutoConfiguration hoặc @SpringBootApplication. Có thể exclude bằng exclude parameter.",
    difficulty: "Intermediate"
  },
  {
    id: 73,
    category: "Spring Boot",
    question: "@SpringBootApplication annotation là gì?",
    answer: "@SpringBootApplication là meta-annotation kết hợp @Configuration, @EnableAutoConfiguration, @ComponentScan. Được đặt trên main class để enable Spring Boot features.",
    difficulty: "Beginner"
  },
  {
    id: 74,
    category: "Spring Boot",
    question: "application.properties vs application.yml?",
    answer: "Cả hai đều dùng để cấu hình Spring Boot application. application.properties sử dụng key=value format, application.yml sử dụng YAML format. YAML dễ đọc hơn nhưng properties phổ biến hơn.",
    difficulty: "Beginner"
  },
  {
    id: 75,
    category: "Spring Boot",
    question: "@Component, @Service, @Repository, @Controller khác nhau?",
    answer: "@Component là generic stereotype. @Service dùng cho business logic layer. @Repository dùng cho data access layer. @Controller dùng cho web layer. Chúng tương tự nhưng có semantic khác nhau.",
    difficulty: "Intermediate"
  },
  {
    id: 76,
    category: "Spring Boot",
    question: "@Configuration annotation là gì?",
    answer: "@Configuration đánh dấu một class chứa @Bean definitions. Các methods được đánh dấu @Bean trả về objects được register trong Spring context. Tương đương với XML configuration.",
    difficulty: "Intermediate"
  },
  {
    id: 77,
    category: "Spring Boot",
    question: "@Bean annotation là gì?",
    answer: "@Bean được sử dụng trên methods trong @Configuration class để tạo beans. Method name trở thành bean name, return type là bean type. Cho phép custom bean creation logic.",
    difficulty: "Intermediate"
  },
  {
    id: 78,
    category: "Spring Boot",
    question: "@Value annotation dùng để làm gì?",
    answer: "@Value được sử dụng để inject values từ properties files vào fields. Ví dụ: @Value(\"${app.name}\"). Có thể sử dụng SpEL (Spring Expression Language) cho complex expressions.",
    difficulty: "Intermediate"
  },
  {
    id: 79,
    category: "Spring Boot",
    question: "@ConfigurationProperties annotation là gì?",
    answer: "@ConfigurationProperties ánh xạ properties từ application.properties/yml sang Java object. Ví dụ: @ConfigurationProperties(prefix=\"app\") ánh xạ app.* properties. Cần @EnableConfigurationProperties hoặc @Configuration.",
    difficulty: "Intermediate"
  },
  {
    id: 80,
    category: "Spring Boot",
    question: "Profiles trong Spring Boot là gì?",
    answer: "Profiles cho phép có các cấu hình khác nhau cho các environments khác nhau (dev, test, prod). Tạo application-{profile}.properties files. Active profile bằng spring.profiles.active property hoặc environment variable.",
    difficulty: "Intermediate"
  },
  {
    id: 81,
    category: "Spring Boot",
    question: "@RequestMapping annotation là gì?",
    answer: "@RequestMapping ánh xạ HTTP requests đến handler methods. Có thể chỉ định path, method (GET, POST, etc), consumes, produces. @GetMapping, @PostMapping là shortcuts cho @RequestMapping với method cụ thể.",
    difficulty: "Beginner"
  },
  {
    id: 82,
    category: "Spring Boot",
    question: "@PathVariable và @RequestParam khác nhau?",
    answer: "@PathVariable extract values từ URI path (/{id}). @RequestParam extract values từ query string (?name=value). PathVariable là bắt buộc, RequestParam có thể optional.",
    difficulty: "Beginner"
  },
  {
    id: 83,
    category: "Spring Boot",
    question: "@RequestBody annotation là gì?",
    answer: "@RequestBody deserialize HTTP request body thành Java object. Spring sử dụng HttpMessageConverter (thường là Jackson cho JSON). Ví dụ: @PostMapping public void create(@RequestBody User user).",
    difficulty: "Beginner"
  },
  {
    id: 84,
    category: "Spring Boot",
    question: "@ResponseBody annotation là gì?",
    answer: "@ResponseBody serialize Java object thành HTTP response body. Spring sử dụng HttpMessageConverter. @RestController tự động thêm @ResponseBody cho tất cả methods.",
    difficulty: "Beginner"
  },
  {
    id: 85,
    category: "Spring Boot",
    question: "ResponseEntity là gì?",
    answer: "ResponseEntity đại diện cho toàn bộ HTTP response (status, headers, body). Cho phép control chi tiết response. Ví dụ: return new ResponseEntity<>(data, HttpStatus.OK);",
    difficulty: "Intermediate"
  },
  {
    id: 86,
    category: "Spring Boot",
    question: "@ExceptionHandler annotation là gì?",
    answer: "@ExceptionHandler được sử dụng để handle exceptions trong controller. Có thể define trong controller hoặc trong @ControllerAdvice class. Trả về ResponseEntity hoặc view.",
    difficulty: "Intermediate"
  },
  {
    id: 87,
    category: "Spring Boot",
    question: "@ControllerAdvice annotation là gì?",
    answer: "@ControllerAdvice là global exception handler. Các @ExceptionHandler methods trong class này handle exceptions từ tất cả controllers. Giúp centralize exception handling logic.",
    difficulty: "Intermediate"
  },
  {
    id: 88,
    category: "Spring Boot",
    question: "Content negotiation trong Spring Boot là gì?",
    answer: "Content negotiation là quá trình chọn representation format (JSON, XML, etc) dựa trên Accept header. Spring Boot tự động support nếu có appropriate HttpMessageConverter.",
    difficulty: "Intermediate"
  },
  {
    id: 89,
    category: "Spring Boot",
    question: "CORS trong Spring Boot là gì?",
    answer: "CORS (Cross-Origin Resource Sharing) cho phép requests từ different origins. Cấu hình bằng @CrossOrigin annotation hoặc WebMvcConfigurer. Chỉ định allowed origins, methods, headers.",
    difficulty: "Intermediate"
  },
  {
    id: 90,
    category: "Spring Boot",
    question: "Interceptor trong Spring Boot là gì?",
    answer: "Interceptor intercept requests trước khi đến handler và responses trước khi gửi. Implement HandlerInterceptor interface. Dùng cho logging, authentication, performance monitoring.",
    difficulty: "Intermediate"
  },
  {
    id: 91,
    category: "Spring Boot",
    question: "Spring Data JPA là gì?",
    answer: "Spring Data JPA cung cấp repository abstraction cho JPA. Giảm boilerplate code bằng cách auto-generate queries. Extend JpaRepository interface để có CRUD operations.",
    difficulty: "Intermediate"
  },
  {
    id: 92,
    category: "Spring Boot",
    question: "@Entity annotation là gì?",
    answer: "@Entity đánh dấu một class là JPA entity. Mỗi instance đại diện cho một row trong database. Phải có @Id field. Có thể customize table name, column names với @Table, @Column.",
    difficulty: "Beginner"
  },
  {
    id: 93,
    category: "Spring Boot",
    question: "@Id và @GeneratedValue annotation là gì?",
    answer: "@Id đánh dấu primary key field. @GeneratedValue chỉ định cách generate value. Strategy: AUTO, IDENTITY, SEQUENCE, TABLE. Ví dụ: @GeneratedValue(strategy = GenerationType.IDENTITY).",
    difficulty: "Beginner"
  },
  {
    id: 94,
    category: "Spring Boot",
    question: "@OneToMany, @ManyToOne, @ManyToMany relationship là gì?",
    answer: "@OneToMany: một entity có nhiều entities khác. @ManyToOne: nhiều entities có một entity. @ManyToMany: nhiều entities có nhiều entities. Cần specify join table cho @ManyToMany.",
    difficulty: "Intermediate"
  },
  {
    id: 95,
    category: "Spring Boot",
    question: "Lazy loading vs Eager loading là gì?",
    answer: "Lazy loading: related entities được load khi accessed. Eager loading: related entities được load ngay khi parent entity được load. Default: @OneToMany, @ManyToMany là lazy; @ManyToOne, @OneToOne là eager.",
    difficulty: "Intermediate"
  },
  {
    id: 96,
    category: "Spring Boot",
    question: "N+1 problem là gì?",
    answer: "N+1 problem xảy ra khi query 1 entity và sau đó query N related entities trong loop, dẫn đến N+1 queries. Tránh bằng: eager loading, join fetch, @EntityGraph, hoặc batch loading.",
    difficulty: "Advanced"
  },
  {
    id: 97,
    category: "Spring Boot",
    question: "@Query annotation là gì?",
    answer: "@Query cho phép định nghĩa custom JPQL hoặc native SQL queries. Ví dụ: @Query(\"SELECT u FROM User u WHERE u.name = ?1\"). Có thể sử dụng named parameters: @Query(\"SELECT u FROM User u WHERE u.name = :name\").",
    difficulty: "Intermediate"
  },
  {
    id: 98,
    category: "Spring Boot",
    question: "Pagination và Sorting trong Spring Data JPA?",
    answer: "Sử dụng Pageable parameter trong repository methods. Spring tự động inject Pageable từ request parameters (page, size, sort). Ví dụ: Page<User> findAll(Pageable pageable);",
    difficulty: "Intermediate"
  },
  {
    id: 99,
    category: "Spring Boot",
    question: "Transaction trong Spring Boot là gì?",
    answer: "@Transactional annotation đánh dấu method là transactional. Tự động commit nếu thành công, rollback nếu exception. Có thể specify propagation, isolation level, timeout.",
    difficulty: "Intermediate"
  },
  {
    id: 100,
    category: "Spring Boot",
    question: "ACID properties là gì?",
    answer: "Atomicity: transaction hoàn thành hoặc không. Consistency: database chuyển từ valid state sang valid state. Isolation: transactions không ảnh hưởng lẫn nhau. Durability: committed data persistent.",
    difficulty: "Intermediate"
  },
  {
    id: 101,
    category: "Spring Boot",
    question: "Spring Security là gì?",
    answer: "Spring Security là framework cung cấp authentication và authorization. Sử dụng filters để intercept requests. Hỗ trợ nhiều authentication methods: form login, HTTP basic, JWT, OAuth2.",
    difficulty: "Intermediate"
  },
  {
    id: 102,
    category: "Spring Boot",
    question: "Authentication vs Authorization?",
    answer: "Authentication là xác minh identity của user (login). Authorization là kiểm tra permissions của user (access control). Spring Security handle cả hai.",
    difficulty: "Beginner"
  },
  {
    id: 103,
    category: "Spring Boot",
    question: "@EnableWebSecurity annotation là gì?",
    answer: "@EnableWebSecurity enable Spring Security web security support. Cho phép configure HttpSecurity, WebSecurity. Phải extend WebSecurityConfigurerAdapter (deprecated) hoặc SecurityFilterChain.",
    difficulty: "Intermediate"
  },
  {
    id: 104,
    category: "Spring Boot",
    question: "SecurityFilterChain là gì?",
    answer: "SecurityFilterChain định nghĩa security configuration cho requests. Chứa một chuỗi filters. Có thể có nhiều SecurityFilterChain cho different URL patterns.",
    difficulty: "Intermediate"
  },
  {
    id: 105,
    category: "Spring Boot",
    question: "JWT (JSON Web Token) là gì?",
    answer: "JWT là token-based authentication method. Gồm 3 phần: header, payload, signature. Stateless, không cần store session. Thường dùng cho REST APIs và mobile apps.",
    difficulty: "Intermediate"
  },
  {
    id: 106,
    category: "Spring Boot",
    question: "OAuth2 là gì?",
    answer: "OAuth2 là authorization framework cho phép users cấp access đến resources mà không share passwords. Sử dụng access tokens. Hỗ trợ multiple flows: authorization code, implicit, client credentials, resource owner password.",
    difficulty: "Advanced"
  },
  {
    id: 107,
    category: "Spring Boot",
    question: "@PreAuthorize annotation là gì?",
    answer: "@PreAuthorize check permissions trước khi method execute. Sử dụng SpEL expressions. Ví dụ: @PreAuthorize(\"hasRole('ADMIN')\"). Phải enable @EnableGlobalMethodSecurity.",
    difficulty: "Intermediate"
  },
  {
    id: 108,
    category: "Spring Boot",
    question: "@PostAuthorize annotation là gì?",
    answer: "@PostAuthorize check permissions sau khi method execute. Có thể access return value. Ví dụ: @PostAuthorize(\"returnObject.owner == authentication.principal.username\").",
    difficulty: "Advanced"
  },
  {
    id: 109,
    category: "Spring Boot",
    question: "CSRF protection trong Spring Security?",
    answer: "CSRF (Cross-Site Request Forgery) protection sử dụng CSRF tokens. Spring Security tự động generate token và validate. Disable nếu cần (stateless APIs). Sử dụng SameSite cookie attribute.",
    difficulty: "Intermediate"
  },
  {
    id: 110,
    category: "Spring Boot",
    question: "Password encoding trong Spring Security?",
    answer: "Spring Security sử dụng PasswordEncoder để encode passwords. Recommendation: BCryptPasswordEncoder. Không nên store plain text passwords. Sử dụng salt để prevent rainbow table attacks.",
    difficulty: "Intermediate"
  },
  {
    id: 111,
    category: "Spring Boot",
    question: "AOP (Aspect-Oriented Programming) là gì?",
    answer: "AOP cho phép separate cross-cutting concerns (logging, security, transactions) từ business logic. Sử dụng aspects, pointcuts, advices. Spring AOP sử dụng proxies.",
    difficulty: "Advanced"
  },
  {
    id: 112,
    category: "Spring Boot",
    question: "@Aspect annotation là gì?",
    answer: "@Aspect đánh dấu một class là aspect. Chứa advices (@Before, @After, @Around, @AfterReturning, @AfterThrowing) và pointcuts. Phải enable @EnableAspectJAutoProxy.",
    difficulty: "Advanced"
  },
  {
    id: 113,
    category: "Spring Boot",
    question: "Pointcut là gì?",
    answer: "Pointcut định nghĩa nơi advice sẽ được applied. Sử dụng AspectJ pointcut expressions. Ví dụ: @Pointcut(\"execution(* com.example.service.*.*(..))\") match tất cả methods trong service package.",
    difficulty: "Advanced"
  },
  {
    id: 114,
    category: "Spring Boot",
    question: "@Before, @After, @Around advice khác nhau?",
    answer: "@Before execute trước method. @After execute sau method (regardless of result). @Around execute trước và sau, có thể control method execution. @AfterReturning, @AfterThrowing cho specific cases.",
    difficulty: "Advanced"
  },
  {
    id: 115,
    category: "Spring Boot",
    question: "Caching trong Spring Boot là gì?",
    answer: "@Cacheable cache method result. @CacheEvict remove từ cache. @CachePut update cache. @Caching combine multiple cache operations. Phải enable @EnableCaching. Hỗ trợ multiple cache managers: Redis, Caffeine, etc.",
    difficulty: "Intermediate"
  },
  {
    id: 116,
    category: "Spring Boot",
    question: "Scheduling trong Spring Boot là gì?",
    answer: "@Scheduled chạy method theo schedule. @EnableScheduling enable scheduling. Cron expressions hoặc fixed delay/rate. Ví dụ: @Scheduled(cron=\"0 0 * * * *\") chạy mỗi giờ.",
    difficulty: "Intermediate"
  },
  {
    id: 117,
    category: "Spring Boot",
    question: "Async processing trong Spring Boot?",
    answer: "@Async chạy method trong thread pool. @EnableAsync enable async. Trả về Future hoặc CompletableFuture. Giúp improve responsiveness cho long-running tasks.",
    difficulty: "Intermediate"
  },
  {
    id: 118,
    category: "Spring Boot",
    question: "Event-driven architecture trong Spring Boot?",
    answer: "ApplicationEvent cho phép publish events. @EventListener hoặc ApplicationListener handle events. Decouples components. Ví dụ: publish user registration event, multiple listeners handle nó.",
    difficulty: "Advanced"
  },
  {
    id: 119,
    category: "Spring Boot",
    question: "Validation trong Spring Boot là gì?",
    answer: "@Valid trigger validation trên request body. @NotNull, @NotBlank, @Email, @Size, etc annotations. Custom validators implement ConstraintValidator. Validation errors trả về BindingResult.",
    difficulty: "Intermediate"
  },
  {
    id: 120,
    category: "Spring Boot",
    question: "Actuator trong Spring Boot là gì?",
    answer: "Actuator cung cấp production-ready features: monitoring, metrics, health checks. Expose endpoints: /actuator/health, /actuator/metrics, /actuator/env. Giúp monitor application.",
    difficulty: "Intermediate"
  },
  {
    id: 121,
    category: "Core",
    question: "RESTful API design principles?",
    answer: "Sử dụng HTTP methods (GET, POST, PUT, DELETE) cho operations. Resources được identify bằng URIs. Stateless communication. Proper HTTP status codes. JSON/XML representations. HATEOAS (optional).",
    difficulty: "Intermediate"
  },
  {
    id: 122,
    category: "Core",
    question: "HTTP status codes là gì?",
    answer: "1xx: Informational. 2xx: Success (200 OK, 201 Created). 3xx: Redirection. 4xx: Client error (400 Bad Request, 401 Unauthorized, 404 Not Found). 5xx: Server error (500 Internal Server Error).",
    difficulty: "Beginner"
  },
  {
    id: 123,
    category: "Spring Boot",
    question: "Microservices architecture là gì?",
    answer: "Chia application thành small, independent services. Mỗi service có database riêng. Communicate qua APIs (REST, gRPC, messaging). Scalable, maintainable, nhưng complex.",
    difficulty: "Advanced"
  },
  {
    id: 124,
    category: "Spring Boot",
    question: "API Gateway là gì?",
    answer: "API Gateway là entry point cho clients. Handles routing, authentication, rate limiting, logging. Decouples clients từ microservices. Ví dụ: Netflix Zuul, Spring Cloud Gateway.",
    difficulty: "Advanced"
  },
  {
    id: 125,
    category: "Spring Boot",
    question: "Service discovery là gì?",
    answer: "Service discovery tự động detect available services. Clients không cần hardcode service URLs. Ví dụ: Eureka, Consul. Giúp trong microservices architecture.",
    difficulty: "Advanced"
  },
  {
    id: 126,
    category: "Spring Boot",
    question: "Load balancing là gì?",
    answer: "Load balancing distribute requests giữa multiple servers. Improve performance, availability, reliability. Ví dụ: Round-robin, Least connections, IP hash. Có thể client-side hoặc server-side.",
    difficulty: "Intermediate"
  },
  {
    id: 127,
    category: "Core",
    question: "Database indexing là gì?",
    answer: "Index tăng tốc độ data retrieval. Giảm query time nhưng tăng storage, insert/update time. Types: Primary key, Unique, Composite, Full-text. Cần balance giữa read/write performance.",
    difficulty: "Intermediate"
  },
  {
    id: 128,
    category: "Core",
    question: "Database normalization là gì?",
    answer: "Normalization giảm data redundancy, improve data integrity. Normal forms: 1NF, 2NF, 3NF, BCNF. Tránh anomalies: insertion, update, deletion. Trade-off: more tables, more joins.",
    difficulty: "Intermediate"
  },
  {
    id: 129,
    category: "Core",
    question: "SQL injection là gì?",
    answer: "SQL injection là security vulnerability khi user input được concatenated vào SQL query. Attacker có thể modify query logic. Tránh: prepared statements, parameterized queries, input validation.",
    difficulty: "Intermediate"
  },
  {
    id: 130,
    category: "Spring Boot",
    question: "Logging best practices?",
    answer: "Sử dụng logging framework (SLF4J, Logback). Log appropriate levels: DEBUG, INFO, WARN, ERROR. Include context information. Avoid logging sensitive data. Use structured logging (JSON).",
    difficulty: "Intermediate"
  },
  {
    id: 131,
    category: "Core",
    question: "Design patterns: Singleton là gì?",
    answer: "Singleton pattern đảm bảo chỉ một instance của class tồn tại. Cung cấp global access point. Ví dụ: Logger, Database connection pool. Cần thread-safe implementation.",
    difficulty: "Intermediate"
  },
  {
    id: 132,
    category: "Core",
    question: "Design patterns: Factory là gì?",
    answer: "Factory pattern tạo objects mà không specify exact classes. Decouples object creation từ usage. Ví dụ: DatabaseFactory tạo MySQL hoặc PostgreSQL connections.",
    difficulty: "Intermediate"
  },
  {
    id: 133,
    category: "Core",
    question: "Design patterns: Observer là gì?",
    answer: "Observer pattern define one-to-many relationship giữa objects. Khi một object thay đổi, tất cả dependents được notify. Ví dụ: Event listeners, MVC pattern.",
    difficulty: "Intermediate"
  },
  {
    id: 134,
    category: "Core",
    question: "Design patterns: Strategy là gì?",
    answer: "Strategy pattern define family of algorithms, encapsulate mỗi cái. Clients có thể choose algorithm at runtime. Ví dụ: Payment methods (credit card, PayPal, etc).",
    difficulty: "Intermediate"
  },
  {
    id: 135,
    category: "Core",
    question: "Design patterns: Decorator là gì?",
    answer: "Decorator pattern attach additional responsibilities đến object dynamically. Provide flexible alternative to subclassing. Ví dụ: InputStream wrappers (BufferedInputStream, GZIPInputStream).",
    difficulty: "Advanced"
  },
  {
    id: 136,
    category: "Spring Boot",
    question: "Testing: Unit testing là gì?",
    answer: "Unit testing test individual components (methods, classes) in isolation. Sử dụng mocks, stubs. Frameworks: JUnit, Mockito. Nên test happy path, edge cases, error cases.",
    difficulty: "Intermediate"
  },
  {
    id: 137,
    category: "Spring Boot",
    question: "Testing: Integration testing là gì?",
    answer: "Integration testing test interaction giữa multiple components. Sử dụng real databases, services. Frameworks: Spring Boot Test, TestContainers. Slower nhưng more realistic.",
    difficulty: "Intermediate"
  },
  {
    id: 138,
    category: "Spring Boot",
    question: "Testing: Mocking là gì?",
    answer: "Mocking tạo fake objects để replace real dependencies. Giúp isolate code under test. Frameworks: Mockito, EasyMock. Có thể verify method calls, set expectations.",
    difficulty: "Intermediate"
  },
  {
    id: 139,
    category: "Spring Boot",
    question: "@SpringBootTest annotation là gì?",
    answer: "@SpringBootTest load full application context cho testing. Cho phép test Spring components, repositories, services. Có thể specify test properties, mock beans.",
    difficulty: "Intermediate"
  },
  {
    id: 140,
    category: "Spring Boot",
    question: "Performance optimization techniques?",
    answer: "Caching, database indexing, query optimization, lazy loading, connection pooling, compression, CDN. Profile code để identify bottlenecks. Monitor metrics.",
    difficulty: "Advanced"
  },
  {
    id: 141,
    category: "Core",
    question: "Memory leak là gì?",
    answer: "Memory leak xảy ra khi objects không được garbage collected mặc dù không còn được sử dụng. Nguyên nhân: static references, listeners không được unregister, circular references.",
    difficulty: "Intermediate"
  },
  {
    id: 142,
    category: "Core",
    question: "Garbage collection là gì?",
    answer: "Garbage collection tự động giải phóng memory của objects không còn referenced. JVM chạy GC periodically. Types: Serial, Parallel, CMS, G1. Có thể tune GC parameters.",
    difficulty: "Intermediate"
  },
  {
    id: 143,
    category: "Spring Boot",
    question: "Docker containerization là gì?",
    answer: "Docker package application và dependencies vào container. Lightweight, portable, consistent across environments. Dockerfile define image. docker-compose orchestrate multiple containers.",
    difficulty: "Intermediate"
  },
  {
    id: 144,
    category: "Spring Boot",
    question: "CI/CD pipeline là gì?",
    answer: "CI/CD automate build, test, deployment. CI: code changes automatically built, tested. CD: successful builds automatically deployed. Tools: Jenkins, GitLab CI, GitHub Actions.",
    difficulty: "Intermediate"
  },
  {
    id: 145,
    category: "Spring Boot",
    question: "API versioning strategies?",
    answer: "URL path: /api/v1/users. Request header: Accept: application/vnd.company.v1+json. Query parameter: /api/users?version=1. Maintain backward compatibility.",
    difficulty: "Intermediate"
  },
  {
    id: 146,
    category: "Spring Boot",
    question: "Rate limiting là gì?",
    answer: "Rate limiting restrict số requests từ client. Prevent abuse, DDoS attacks. Implement bằng: token bucket, sliding window, fixed window. HTTP 429 Too Many Requests.",
    difficulty: "Intermediate"
  },
  {
    id: 147,
    category: "Core",
    question: "Serialization và Deserialization là gì?",
    answer: "Serialization convert object thành byte stream. Deserialization convert byte stream thành object. Dùng cho persistence, network transmission. Java: Serializable interface, JSON libraries.",
    difficulty: "Intermediate"
  },
  {
    id: 148,
    category: "Spring Boot",
    question: "Message queue là gì?",
    answer: "Message queue decouple components bằng asynchronous messaging. Producer send messages, consumer receive. Ví dụ: RabbitMQ, Apache Kafka, AWS SQS. Improve scalability, reliability.",
    difficulty: "Advanced"
  },
  {
    id: 149,
    category: "Core",
    question: "Reflection API là gì?",
    answer: "Reflection API cho phép inspect, modify classes, methods, fields at runtime. Sử dụng Class, Method, Field classes. Powerful nhưng slow, security risks. Dùng cho frameworks, testing.",
    difficulty: "Advanced"
  },
  {
    id: 150,
    category: "Spring Boot",
    question: "Dependency injection containers là gì?",
    answer: "DI containers manage object creation, lifecycle, dependencies. Spring IoC container. Giảm coupling, improve testability. Sử dụng annotations hoặc XML configuration.",
    difficulty: "Intermediate"
  },
  // --- MORE QUESTIONS (151-200) ---
  {
    id: 151,
    category: "Spring Boot",
    question: "Testing: @SpringBootTest vs @WebMvcTest?",
    answer: "@SpringBootTest load full application context. @WebMvcTest load chỉ web layer (controllers, filters). @WebMvcTest faster, dùng cho testing controllers. @SpringBootTest dùng cho integration testing.",
    difficulty: "Intermediate"
  },
  {
    id: 152,
    category: "Spring Boot",
    question: "Mockito: when(), thenReturn() dùng để làm gì?",
    answer: "when() specify khi nào mock sẽ trả về giá trị. thenReturn() chỉ định giá trị trả về. Ví dụ: when(userService.getUser(1)).thenReturn(user);",
    difficulty: "Intermediate"
  },
  {
    id: 153,
    category: "Spring Boot",
    question: "Mockito: verify() dùng để làm gì?",
    answer: "verify() kiểm tra xem mock method có được gọi hay không, bao nhiêu lần, với arguments nào. Ví dụ: verify(userService).save(user);",
    difficulty: "Intermediate"
  },
  {
    id: 154,
    category: "Spring Boot",
    question: "TestContainers là gì?",
    answer: "TestContainers cung cấp lightweight, throwaway instances của databases, message brokers, etc. trong Docker containers. Giúp testing với real services mà không cần setup manual.",
    difficulty: "Advanced"
  },
  {
    id: 155,
    category: "Core",
    question: "Immutable objects là gì?",
    answer: "Immutable objects không thể thay đổi sau khi tạo. Ví dụ: String, Integer. Lợi ích: thread-safe, cacheable, hashable. Tạo bằng: final fields, private constructor, no setters.",
    difficulty: "Intermediate"
  },
  {
    id: 156,
    category: "Core",
    question: "Builder pattern là gì?",
    answer: "Builder pattern tạo complex objects step-by-step. Separate construction từ representation. Giúp code readable, flexible. Ví dụ: StringBuilder, Lombok @Builder.",
    difficulty: "Intermediate"
  },
  {
    id: 157,
    category: "Core",
    question: "Adapter pattern là gì?",
    answer: "Adapter pattern convert interface của một class sang interface khác. Cho phép incompatible interfaces work together. Ví dụ: Collections.asMap(), InputStreamReader.",
    difficulty: "Intermediate"
  },
  {
    id: 158,
    category: "Core",
    question: "Proxy pattern là gì?",
    answer: "Proxy pattern cung cấp surrogate hoặc placeholder cho object khác. Control access, lazy initialization, logging. Ví dụ: Spring AOP proxies, JDK dynamic proxies.",
    difficulty: "Advanced"
  },
  {
    id: 159,
    category: "Spring Boot",
    question: "Spring Cloud là gì?",
    answer: "Spring Cloud cung cấp tools cho microservices: service discovery (Eureka), config server, circuit breaker (Hystrix), API gateway, distributed tracing.",
    difficulty: "Advanced"
  },
  {
    id: 160,
    category: "Spring Boot",
    question: "Circuit breaker pattern là gì?",
    answer: "Circuit breaker prevent cascading failures. Có 3 states: Closed (normal), Open (fail fast), Half-Open (test recovery). Hystrix, Resilience4j implement pattern này.",
    difficulty: "Advanced"
  },
  {
    id: 161,
    category: "Spring Boot",
    question: "Retry mechanism là gì?",
    answer: "Retry mechanism tự động retry failed requests. Exponential backoff, max retries, retry conditions. Spring Retry, Resilience4j support.",
    difficulty: "Intermediate"
  },
  {
    id: 162,
    category: "Spring Boot",
    question: "Bulkhead pattern là gì?",
    answer: "Bulkhead pattern isolate resources để prevent one failure ảnh hưởng others. Separate thread pools, connection pools. Resilience4j support.",
    difficulty: "Advanced"
  },
  {
    id: 163,
    category: "Core",
    question: "Enum là gì?",
    answer: "Enum là type chứa fixed set của constants. Type-safe, comparable. Ví dụ: enum Color { RED, GREEN, BLUE }. Có thể có methods, fields.",
    difficulty: "Intermediate"
  },
  {
    id: 164,
    category: "Core",
    question: "Annotation là gì?",
    answer: "Annotation cung cấp metadata về code. Không directly affect code execution. Ví dụ: @Override, @Deprecated, @FunctionalInterface. Custom annotations dùng @interface.",
    difficulty: "Intermediate"
  },
  {
    id: 165,
    category: "Core",
    question: "Generics là gì?",
    answer: "Generics cho phép type parameters trong classes, interfaces, methods. Ví dụ: List<String>, Map<String, Integer>. Provide type safety, eliminate casting.",
    difficulty: "Intermediate"
  },
  {
    id: 166,
    category: "Core",
    question: "Wildcard types trong Generics?",
    answer: "Wildcard types sử dụng ? để represent unknown type. Upper bounded: <? extends Number>. Lower bounded: <? super Number>. Unbounded: <?>.",
    difficulty: "Advanced"
  },
  {
    id: 167,
    category: "Core",
    question: "Type erasure là gì?",
    answer: "Type erasure remove generic type information tại compile time. Generics chỉ là compile-time feature. Runtime không biết List<String> vs List<Integer>. Vì backward compatibility.",
    difficulty: "Advanced"
  },
  {
    id: 168,
    category: "Spring Boot",
    question: "RestTemplate vs WebClient?",
    answer: "RestTemplate là synchronous HTTP client (deprecated). WebClient là reactive, non-blocking (recommended). WebClient support streaming, better performance.",
    difficulty: "Intermediate"
  },
  {
    id: 169,
    category: "Spring Boot",
    question: "Reactive programming là gì?",
    answer: "Reactive programming xử lý asynchronous data streams. Non-blocking, event-driven. Spring WebFlux, Project Reactor. Sử dụng Mono (0-1 elements), Flux (0-N elements).",
    difficulty: "Advanced"
  },
  {
    id: 170,
    category: "Spring Boot",
    question: "Mono vs Flux?",
    answer: "Mono represent 0 hoặc 1 element. Flux represent 0 đến N elements. Cả hai là reactive types. Mono.just(value), Flux.just(1,2,3).",
    difficulty: "Intermediate"
  },
  {
    id: 171,
    category: "Spring Boot",
    question: "Backpressure là gì?",
    answer: "Backpressure mechanism để consumer báo cho producer biết nó không thể xử lý nhanh. Prevent memory overflow. Reactive Streams handle backpressure.",
    difficulty: "Advanced"
  },
  {
    id: 172,
    category: "Core",
    question: "String interning là gì?",
    answer: "String interning lưu trữ unique strings trong memory pool. String s1 = \"hello\", s2 = \"hello\" cùng reference. intern() method explicitly intern string.",
    difficulty: "Advanced"
  },
  {
    id: 173,
    category: "Core",
    question: "String immutability tại sao quan trọng?",
    answer: "String immutability đảm bảo thread-safety, security, performance (caching). Tránh unexpected changes. Cho phép safe sharing giữa threads.",
    difficulty: "Intermediate"
  },
  {
    id: 174,
    category: "Core",
    question: "StringBuilder vs StringBuffer?",
    answer: "StringBuilder không synchronized, faster. StringBuffer synchronized, thread-safe. Cả hai mutable. Sử dụng StringBuilder trong single-threaded, StringBuffer trong multi-threaded.",
    difficulty: "Beginner"
  },
  {
    id: 175,
    category: "Spring Boot",
    question: "Lombok library là gì?",
    answer: "Lombok giảm boilerplate code bằng annotations. @Getter, @Setter, @ToString, @EqualsAndHashCode, @Data, @Builder. Compile-time code generation.",
    difficulty: "Intermediate"
  },
  {
    id: 176,
    category: "Spring Boot",
    question: "MapStruct là gì?",
    answer: "MapStruct code generator cho object mapping. Compile-time, type-safe. @Mapper interface, @Mapping annotations. Giảm boilerplate code cho DTOs.",
    difficulty: "Intermediate"
  },
  {
    id: 177,
    category: "Spring Boot",
    question: "OpenAPI/Swagger trong Spring Boot?",
    answer: "Springdoc-openapi auto-generate OpenAPI specification từ Spring Boot application. @Operation, @ApiResponse annotations. Swagger UI display API documentation.",
    difficulty: "Intermediate"
  },
  {
    id: 178,
    category: "Spring Boot",
    question: "Actuator endpoints là gì?",
    answer: "Actuator endpoints cung cấp insights vào running application. /health, /metrics, /env, /beans, /httptrace. Có thể customize, secure.",
    difficulty: "Intermediate"
  },
  {
    id: 179,
    category: "Core",
    question: "Bytecode là gì?",
    answer: "Bytecode là intermediate representation của Java code. Compiled từ .java files thành .class files. JVM interpret/compile bytecode thành machine code.",
    difficulty: "Intermediate"
  },
  {
    id: 180,
    category: "Core",
    question: "JIT compilation là gì?",
    answer: "JIT (Just-In-Time) compilation convert bytecode thành native machine code at runtime. Improve performance. JVM monitor hot code, compile frequently-used methods.",
    difficulty: "Advanced"
  },
  {
    id: 181,
    category: "Spring Boot",
    question: "Embedded servers trong Spring Boot?",
    answer: "Spring Boot embed Tomcat, Jetty, Undertow servers. Không cần deploy WAR files. Cấu hình server.port, server.servlet.context-path.",
    difficulty: "Beginner"
  },
  {
    id: 182,
    category: "Spring Boot",
    question: "Fat JAR là gì?",
    answer: "Fat JAR (Uber JAR) chứa application code + tất cả dependencies. Tạo bằng maven-shade-plugin hoặc gradle. Dễ deploy, single artifact.",
    difficulty: "Intermediate"
  },
  {
    id: 183,
    category: "Spring Boot",
    question: "Spring Boot health checks?",
    answer: "/actuator/health endpoint cung cấp application health. Có thể customize health indicators. Liveness probe (app running), Readiness probe (ready to accept requests).",
    difficulty: "Intermediate"
  },
  {
    id: 184,
    category: "Spring Boot",
    question: "Metrics collection trong Spring Boot?",
    answer: "/actuator/metrics endpoint expose metrics. Micrometer library collect metrics. Có thể export đến Prometheus, Grafana, CloudWatch.",
    difficulty: "Intermediate"
  },
  {
    id: 185,
    category: "Core",
    question: "Classpath vs Classpath resources?",
    answer: "Classpath là path mà JVM tìm classes, JARs. Classpath resources là files trong classpath (application.properties, config files). ResourceLoader load resources.",
    difficulty: "Intermediate"
  },
  {
    id: 186,
    category: "Spring Boot",
    question: "Property sources trong Spring Boot?",
    answer: "Spring Boot load properties từ multiple sources: application.properties, environment variables, command-line arguments, system properties. Priority order.",
    difficulty: "Intermediate"
  },
  {
    id: 187,
    category: "Spring Boot",
    question: "Bean scopes là gì?",
    answer: "Bean scopes: singleton (default, one instance), prototype (new instance each time), request, session, application. Cấu hình bằng @Scope annotation.",
    difficulty: "Intermediate"
  },
  {
    id: 188,
    category: "Spring Boot",
    question: "Lazy initialization là gì?",
    answer: "@Lazy annotation delay bean creation đến khi first needed. Giúp startup time, memory usage. Có thể apply trên class hoặc @Bean methods.",
    difficulty: "Intermediate"
  },
  {
    id: 189,
    category: "Spring Boot",
    question: "Conditional beans là gì?",
    answer: "@Conditional annotation create beans conditionally. @ConditionalOnProperty, @ConditionalOnClass, @ConditionalOnMissingBean. Giúp auto-configuration.",
    difficulty: "Advanced"
  },
  {
    id: 190,
    category: "Core",
    question: "ClassLoader hierarchy?",
    answer: "Bootstrap ClassLoader (JDK classes), Extension ClassLoader (JDK extensions), Application ClassLoader (classpath). Delegation model: child ask parent first.",
    difficulty: "Advanced"
  },
  {
    id: 191,
    category: "Spring Boot",
    question: "Spring profiles active?",
    answer: "Active profiles chỉ định environment. spring.profiles.active property hoặc SPRING_PROFILES_ACTIVE environment variable. Load application-{profile}.properties.",
    difficulty: "Beginner"
  },
  {
    id: 192,
    category: "Spring Boot",
    question: "Spring Boot starters dependencies?",
    answer: "Starters simplify Maven/Gradle configuration. spring-boot-starter-web, spring-boot-starter-data-jpa, etc. Auto-configure compatible versions.",
    difficulty: "Beginner"
  },
  {
    id: 193,
    category: "Core",
    question: "Varargs (variable arguments) là gì?",
    answer: "Varargs cho phép method nhận variable number của arguments. Cú pháp: method(int... args). Internally là array. Chỉ có một varargs parameter, phải cuối cùng.",
    difficulty: "Beginner"
  },
  {
    id: 194,
    category: "Core",
    question: "Method overloading vs Method overriding?",
    answer: "Overloading: multiple methods same name, different parameters (compile-time). Overriding: subclass replace parent method (runtime). Overloading static, overriding dynamic.",
    difficulty: "Beginner"
  },
  {
    id: 195,
    category: "Core",
    question: "Access modifiers: public, private, protected, default?",
    answer: "public: accessible everywhere. private: accessible chỉ trong class. protected: accessible trong package + subclasses. default (package-private): accessible trong package.",
    difficulty: "Beginner"
  },
  {
    id: 196,
    category: "Core",
    question: "final keyword dùng để làm gì?",
    answer: "final class: không thể extend. final method: không thể override. final variable: không thể reassign. final parameters: không thể modify.",
    difficulty: "Beginner"
  },
  {
    id: 197,
    category: "Core",
    question: "static keyword dùng để làm gì?",
    answer: "static members: shared giữa tất cả instances. static methods: không access instance variables. static blocks: execute khi class loaded. static imports.",
    difficulty: "Beginner"
  },
  {
    id: 198,
    category: "Spring Boot",
    question: "Spring Boot error handling best practices?",
    answer: "Sử dụng @ExceptionHandler, @ControllerAdvice. Return meaningful error responses. Log exceptions properly. Avoid exposing sensitive information. Consistent error format (JSON).",
    difficulty: "Intermediate"
  },
  {
    id: 199,
    category: "Spring Boot",
    question: "Internationalization (i18n) trong Spring Boot?",
    answer: "MessageSource bean handle messages. messages.properties, messages_en.properties, messages_vi.properties. LocaleResolver determine user locale. @EnableWebMvc enable message resolution.",
    difficulty: "Intermediate"
  },
  {
    id: 200,
    category: "Spring Boot",
    question: "File upload/download trong Spring Boot?",
    answer: "@PostMapping handle file upload. MultipartFile parameter. @GetMapping return file với ResponseEntity, HttpHeaders. Validate file size, type.",
    difficulty: "Intermediate"
  },
  // --- CORE DEEP DIVE QUESTIONS (201-260) ---
  {
    id: 201,
    category: "Core",
    question: "JVM memory structure: Heap, Stack, PermGen/Metaspace khác nhau?",
    answer: "Heap: shared memory cho objects, garbage collected. Stack: thread-local, stores primitives + references, automatically freed. PermGen (Java 7): class metadata. Metaspace (Java 8+): class metadata in native memory, no fixed size limit.",
    difficulty: "Advanced"
  },
  {
    id: 202,
    category: "Core",
    question: "Generational garbage collection là gì?",
    answer: "GC chia heap thành generations: Young (Eden, Survivor), Old. Young objects được collect thường xuyên (minor GC), old objects ít hơn (major GC). Dựa trên weak generational hypothesis: most objects die young.",
    difficulty: "Advanced"
  },
  {
    id: 203,
    category: "Core",
    question: "G1 garbage collector là gì?",
    answer: "G1 (Garbage First) chia heap thành regions. Collect regions với most garbage first. Low latency, predictable pause times. Default GC từ Java 9+. Suitable cho large heaps (>4GB).",
    difficulty: "Advanced"
  },
  {
    id: 204,
    category: "Core",
    question: "ZGC (Z Garbage Collector) là gì?",
    answer: "ZGC là low-latency GC với pause times <10ms regardless of heap size. Sử dụng colored pointers, load barriers. Experimental từ Java 11, production ready từ Java 15.",
    difficulty: "Advanced"
  },
  {
    id: 205,
    category: "Core",
    question: "Shenandoah GC là gì?",
    answer: "Shenandoah là low-pause GC với concurrent evacuation. Pause times independent of heap size. Developed by Red Hat. Available từ Java 12.",
    difficulty: "Advanced"
  },
  {
    id: 206,
    category: "Core",
    question: "String pool trong Java là gì?",
    answer: "String pool lưu trữ unique string literals. Khi tạo string literal, JVM check pool trước. Nếu tồn tại, reuse reference. Nếu không, thêm vào pool. Giảm memory usage.",
    difficulty: "Intermediate"
  },
  {
    id: 207,
    category: "Core",
    question: "Escape analysis là gì?",
    answer: "Escape analysis xác định objects không escape method scope. JVM có thể optimize: stack allocation, scalar replacement, lock elimination. Improve performance.",
    difficulty: "Advanced"
  },
  {
    id: 208,
    category: "Core",
    question: "Object allocation paths trong JVM?",
    answer: "Fast path: TLAB (Thread Local Allocation Buffer) allocation. Slow path: heap allocation with synchronization. TLAB giảm contention, improve allocation speed.",
    difficulty: "Advanced"
  },
  {
    id: 209,
    category: "Core",
    question: "Weak references, Soft references, Phantom references khác nhau?",
    answer: "Weak: collected immediately when no strong references. Soft: collected when memory low. Phantom: collected, used for cleanup. Useful cho caching, memory-sensitive applications.",
    difficulty: "Advanced"
  },
  {
    id: 210,
    category: "Core",
    question: "Monitor lock trong Java là gì?",
    answer: "Monitor lock (intrinsic lock) associated với mỗi object. synchronized keyword acquire/release monitor. Biased locking, lock coarsening, lock elimination optimizations.",
    difficulty: "Advanced"
  },
  {
    id: 211,
    category: "Core",
    question: "Bytecode instructions: LOAD, STORE, INVOKE là gì?",
    answer: "LOAD: load local variable lên operand stack. STORE: store stack top vào local variable. INVOKE: invoke method (INVOKEVIRTUAL, INVOKESPECIAL, INVOKESTATIC, INVOKEINTERFACE).",
    difficulty: "Advanced"
  },
  {
    id: 212,
    category: "Core",
    question: "Constant pool trong class file là gì?",
    answer: "Constant pool chứa constants: strings, numbers, class references, method references. Indexed từ 1. Used bởi bytecode instructions để reference constants.",
    difficulty: "Advanced"
  },
  {
    id: 213,
    category: "Core",
    question: "Method inlining trong JIT là gì?",
    answer: "JIT inline small methods vào caller code. Eliminate method call overhead. Requires monomorphic call sites (single implementation). Aggressive inlining có thể increase code size.",
    difficulty: "Advanced"
  },
  {
    id: 214,
    category: "Core",
    question: "Speculative optimization là gì?",
    answer: "JIT assume certain conditions (e.g., monomorphic call sites) và optimize. If assumption violated (deoptimization), revert to interpreter. Improve performance cho common cases.",
    difficulty: "Advanced"
  },
  {
    id: 215,
    category: "Core",
    question: "Tiered compilation trong JVM là gì?",
    answer: "Tiered compilation combine interpreter + C1 (client) compiler + C2 (server) compiler. Start với interpreter, profile code, compile hot methods. Balance startup time vs peak performance.",
    difficulty: "Advanced"
  },
  {
    id: 216,
    category: "Core",
    question: "Loop unrolling optimization là gì?",
    answer: "Loop unrolling replicate loop body multiple times, reduce loop overhead. JIT automatically unroll loops. Trade-off: code size vs performance.",
    difficulty: "Advanced"
  },
  {
    id: 217,
    category: "Core",
    question: "Dead code elimination là gì?",
    answer: "JIT remove code không có side effects, không reachable. Giảm code size, improve cache locality. Enabled bởi escape analysis, type analysis.",
    difficulty: "Advanced"
  },
  {
    id: 218,
    category: "Core",
    question: "Branch prediction trong CPU level?",
    answer: "CPU predict branch outcomes để fill pipeline. Misprediction costly (pipeline flush). JIT arrange code để reduce mispredictions. Branch prediction buffer.",
    difficulty: "Advanced"
  },
  {
    id: 219,
    category: "Core",
    question: "SIMD (Single Instruction Multiple Data) vectorization?",
    answer: "JIT vectorize loops sử dụng SIMD instructions. Process multiple data elements parallel. Require array access patterns, no data dependencies.",
    difficulty: "Advanced"
  },
  {
    id: 220,
    category: "Core",
    question: "Profiling-guided optimization (PGO) là gì?",
    answer: "PGO use runtime profile data để guide optimization decisions. JIT optimize based on actual execution patterns. Improve performance cho real workloads.",
    difficulty: "Advanced"
  },
  {
    id: 221,
    category: "Core",
    question: "Memory barriers và happens-before relationships?",
    answer: "Memory barriers ensure visibility của shared memory changes. volatile reads/writes, synchronized blocks, explicit locks generate barriers. Happens-before define ordering guarantees.",
    difficulty: "Advanced"
  },
  {
    id: 222,
    category: "Core",
    question: "StampedLock là gì?",
    answer: "StampedLock provide optimistic locking. Readers không acquire lock, use stamps để detect conflicts. Faster than ReentrantReadWriteLock cho read-heavy workloads.",
    difficulty: "Advanced"
  },
  {
    id: 223,
    category: "Core",
    question: "LongAdder vs AtomicLong?",
    answer: "LongAdder use multiple cells để reduce contention. AtomicLong use single value. LongAdder faster cho high-contention scenarios, AtomicLong simpler.",
    difficulty: "Advanced"
  },
  {
    id: 224,
    category: "Core",
    question: "Phaser là gì?",
    answer: "Phaser synchronization barrier cho dynamic number của parties. Reusable, flexible alternative to CountDownLatch, CyclicBarrier. Support multiple phases.",
    difficulty: "Advanced"
  },
  {
    id: 225,
    category: "Core",
    question: "Exchanger là gì?",
    answer: "Exchanger allow two threads exchange objects. Synchronization point. Useful cho producer-consumer patterns, pipeline stages.",
    difficulty: "Advanced"
  },
  {
    id: 226,
    category: "Core",
    question: "ThreadLocal memory leaks?",
    answer: "ThreadLocal không remove entries khi thread terminated. Nếu thread reused (thread pool), entries persist. Cause memory leak. Phải explicitly remove().",
    difficulty: "Advanced"
  },
  {
    id: 227,
    category: "Core",
    question: "Fork/Join framework là gì?",
    answer: "Fork/Join implement divide-and-conquer parallelism. RecursiveTask, RecursiveAction. Work-stealing queue reduce contention. Suitable cho recursive problems.",
    difficulty: "Advanced"
  },
  {
    id: 228,
    category: "Core",
    question: "Happens-before: volatile writes/reads?",
    answer: "Volatile write happens-before subsequent volatile read. Ensure visibility. Nhưng không provide atomicity cho compound operations.",
    difficulty: "Advanced"
  },
  {
    id: 229,
    category: "Core",
    question: "Compare-and-swap (CAS) operations?",
    answer: "CAS atomically compare value, swap nếu match. Underlying mechanism cho AtomicInteger, AtomicReference. Lock-free algorithms. Retry on failure.",
    difficulty: "Advanced"
  },
  {
    id: 230,
    category: "Core",
    question: "Acquire-release semantics là gì?",
    answer: "Acquire: load barrier, prevent subsequent operations move before. Release: store barrier, prevent prior operations move after. Weaker than full barrier, better performance.",
    difficulty: "Advanced"
  },
  {
    id: 231,
    category: "Core",
    question: "HashMap internal structure: buckets, load factor, collision?",
    answer: "HashMap use array của buckets. Hash code determine bucket index. Collision handled bằng chaining (linked list) hoặc red-black tree (Java 8+). Load factor 0.75 default.",
    difficulty: "Advanced"
  },
  {
    id: 232,
    category: "Core",
    question: "HashMap resize mechanism?",
    answer: "HashMap resize khi size > capacity * load factor. New capacity = 2 * old capacity. Rehash tất cả entries. Expensive operation, avoid frequent resizes.",
    difficulty: "Advanced"
  },
  {
    id: 233,
    category: "Core",
    question: "TreeMap red-black tree implementation?",
    answer: "TreeMap use red-black tree. Self-balancing, O(log n) operations. Maintain sorted order. More overhead than HashMap nhưng guarantee performance.",
    difficulty: "Advanced"
  },
  {
    id: 234,
    category: "Core",
    question: "LinkedHashMap insertion order vs access order?",
    answer: "LinkedHashMap maintain insertion order (default) hoặc access order. Access order useful cho LRU cache. Override removeEldestEntry() để limit size.",
    difficulty: "Advanced"
  },
  {
    id: 235,
    category: "Core",
    question: "ConcurrentHashMap segment-based locking?",
    answer: "ConcurrentHashMap divide map thành segments. Mỗi segment có own lock. Multiple threads access different segments simultaneously. Default 16 segments (Java 7).",
    difficulty: "Advanced"
  },
  {
    id: 236,
    category: "Core",
    question: "ConcurrentHashMap Java 8+ bucket-level locking?",
    answer: "Java 8+ ConcurrentHashMap use bucket-level locking thay vì segment-level. Finer-grained locking, better scalability. Synchronized buckets.",
    difficulty: "Advanced"
  },
  {
    id: 237,
    category: "Core",
    question: "ArrayList vs Vector?",
    answer: "ArrayList unsynchronized, faster. Vector synchronized, thread-safe nhưng slower. ArrayList preferred. Vector legacy class, rarely used.",
    difficulty: "Beginner"
  },
  {
    id: 238,
    category: "Core",
    question: "CopyOnWriteArrayList use case?",
    answer: "CopyOnWriteArrayList copy array on write operations. Expensive writes, cheap reads. Useful cho read-heavy, infrequent writes scenarios.",
    difficulty: "Advanced"
  },
  {
    id: 239,
    category: "Core",
    question: "BlockingQueue implementations?",
    answer: "LinkedBlockingQueue: unbounded hoặc bounded, linked nodes. ArrayBlockingQueue: bounded, array-based. PriorityBlockingQueue: priority ordering. Useful cho producer-consumer.",
    difficulty: "Intermediate"
  },
  {
    id: 240,
    category: "Core",
    question: "ConcurrentSkipListMap vs TreeMap?",
    answer: "ConcurrentSkipListMap use skip list, thread-safe, lock-free. TreeMap use red-black tree, not thread-safe. SkipList simpler, comparable performance.",
    difficulty: "Advanced"
  },
  {
    id: 241,
    category: "Core",
    question: "Reflection performance implications?",
    answer: "Reflection slower than direct access. No inlining, dynamic dispatch. Use caching, avoid reflection in hot paths. MethodHandle faster alternative (Java 7+).",
    difficulty: "Advanced"
  },
  {
    id: 242,
    category: "Core",
    question: "MethodHandle vs Reflection?",
    answer: "MethodHandle lower-level, faster than Reflection. JIT optimize MethodHandle calls. Preferred cho performance-critical code. Require more setup.",
    difficulty: "Advanced"
  },
  {
    id: 243,
    category: "Core",
    question: "Annotation retention policies?",
    answer: "SOURCE: discard after compilation. CLASS: retain in class file, not runtime (default). RUNTIME: retain at runtime, accessible via Reflection.",
    difficulty: "Intermediate"
  },
  {
    id: 244,
    category: "Core",
    question: "Annotation targets?",
    answer: "@Target specify where annotation applicable: TYPE, FIELD, METHOD, PARAMETER, CONSTRUCTOR, LOCAL_VARIABLE, ANNOTATION_TYPE, PACKAGE, TYPE_PARAMETER, TYPE_USE.",
    difficulty: "Intermediate"
  },
  {
    id: 245,
    category: "Core",
    question: "Meta-annotations là gì?",
    answer: "Meta-annotations annotate annotations. @Target, @Retention, @Documented, @Inherited. Define annotation behavior.",
    difficulty: "Intermediate"
  },
  {
    id: 246,
    category: "Core",
    question: "Repeating annotations là gì?",
    answer: "Repeating annotations allow apply same annotation multiple times. Require container annotation. Java 8+ feature.",
    difficulty: "Intermediate"
  },
  {
    id: 247,
    category: "Core",
    question: "Annotation processors là gì?",
    answer: "Annotation processors process annotations at compile-time. Generate code, validate constraints. Implement AbstractProcessor. Useful cho code generation.",
    difficulty: "Advanced"
  },
  {
    id: 248,
    category: "Core",
    question: "ClassLoader.getResource() vs ClassLoader.getResourceAsStream()?",
    answer: "getResource() return URL. getResourceAsStream() return InputStream. Use getResourceAsStream() để read resource content.",
    difficulty: "Intermediate"
  },
  {
    id: 249,
    category: "Core",
    question: "Class.forName() vs ClassLoader.loadClass()?",
    answer: "Class.forName() initialize class (static blocks execute). ClassLoader.loadClass() không initialize. forName() preferred khi need initialization.",
    difficulty: "Intermediate"
  },
  {
    id: 250,
    category: "Core",
    question: "Proxy classes vs CGLIB?",
    answer: "JDK Proxy: interface-based, require interface. CGLIB: subclass-based, work với concrete classes. Spring AOP use both.",
    difficulty: "Advanced"
  },
  {
    id: 251,
    category: "Core",
    question: "Blocking I/O vs Non-blocking I/O?",
    answer: "Blocking I/O: thread wait cho operation complete. Non-blocking I/O: operation return immediately, use callbacks/selectors. NIO provide non-blocking.",
    difficulty: "Intermediate"
  },
  {
    id: 252,
    category: "Core",
    question: "NIO channels, buffers, selectors?",
    answer: "Channels: bidirectional, non-blocking I/O. Buffers: hold data. Selectors: monitor multiple channels. Together enable efficient I/O.",
    difficulty: "Intermediate"
  },
  {
    id: 253,
    category: "Core",
    question: "ByteBuffer direct vs heap?",
    answer: "Heap buffers: allocated in Java heap, GC managed. Direct buffers: allocated in native memory, faster I/O, no GC. Use direct cho I/O operations.",
    difficulty: "Intermediate"
  },
  {
    id: 254,
    category: "Core",
    question: "Selector registration, selection, key handling?",
    answer: "Register channels with selector. Selector.select() block until channels ready. Selected keys indicate ready channels. Process keys, perform operations.",
    difficulty: "Advanced"
  },
  {
    id: 255,
    category: "Core",
    question: "FileChannel memory-mapped files?",
    answer: "Memory-mapped files map file content vào memory. Efficient random access. map() method create MappedByteBuffer. Useful cho large files.",
    difficulty: "Advanced"
  },
  {
    id: 256,
    category: "Core",
    question: "Serialization version control: serialVersionUID?",
    answer: "serialVersionUID identify serialized class version. Mismatch cause InvalidClassException. Define explicitly để control versioning.",
    difficulty: "Intermediate"
  },
  {
    id: 257,
    category: "Core",
    question: "Custom serialization: writeObject, readObject?",
    answer: "writeObject, readObject allow custom serialization logic. Called automatically during serialization/deserialization. Useful cho complex objects.",
    difficulty: "Advanced"
  },
  {
    id: 258,
    category: "Core",
    question: "Transient keyword trong serialization?",
    answer: "Transient fields excluded từ serialization. Useful cho sensitive data, non-serializable fields. Restored to default values during deserialization.",
    difficulty: "Intermediate"
  },
  {
    id: 259,
    category: "Core",
    question: "Externalizable vs Serializable?",
    answer: "Serializable: default serialization. Externalizable: custom serialization required. Implement writeExternal(), readExternal(). More control, more responsibility.",
    difficulty: "Advanced"
  },
  {
    id: 260,
    category: "Core",
    question: "ObjectInputStream, ObjectOutputStream security risks?",
    answer: "Deserialization execute arbitrary code (gadget chains). Use ObjectInputFilter (Java 9+) để whitelist classes. Avoid deserialize untrusted data.",
    difficulty: "Advanced"
  }
];

export const CATEGORIES: Category[] = [
  {
    id: 'Core',
    name: 'Java Core',
    icon: '☕',
    description: 'Nền tảng, Memory, Thread, Patterns',
    totalQuestions: STATIC_QUESTIONS.filter(q => q.category === 'Core').length
  },
  {
    id: 'OOP',
    name: 'OOP',
    icon: '🧩',
    description: '4 tính chất, Interface, Class',
    totalQuestions: STATIC_QUESTIONS.filter(q => q.category === 'OOP').length
  },
  {
    id: 'Spring Boot',
    name: 'Spring Boot',
    icon: '🚀',
    description: 'MVC, JPA, Security, Microservices',
    totalQuestions: STATIC_QUESTIONS.filter(q => q.category === 'Spring Boot').length
  }
];