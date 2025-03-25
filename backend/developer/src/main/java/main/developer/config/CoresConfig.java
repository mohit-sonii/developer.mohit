

package main.developer.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CoresConfig {

    public WebMvcConfigurer corsConfigurer(){
        return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/contact/**")
                .allowedOrigins("*")
                .allowedMethods("POST")
                .allowedHeaders("*")
                .allowCredentials(true);
			}
		};
    } 
}