package main.developer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import io.github.cdimascio.dotenv.Dotenv;

@SpringBootApplication
public class MohitApplication {
	public static void main(String[] args) {
		Dotenv dotenv = Dotenv.configure().directory(".").filename(".env").load();
		System.setProperty("DATASOURCE_URL", dotenv.get("DATASOURCE_URL"));
        System.setProperty("DATASOURCE_DATABASE", dotenv.get("DATASOURCE_DATABASE"));
		SpringApplication.run(MohitApplication.class, args);
	}
}
