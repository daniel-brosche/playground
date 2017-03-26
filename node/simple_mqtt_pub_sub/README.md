# MQTT Publisher / Subscriber Example #

1. Setup RabbitMQ and enable mqtt plugin
	- enable mqtt plugin
        - rabbitmq-plugins enable rabbitmq_mqtt
		
	- Enable Management Webfrontend
		- rabbitmq-plugins enable rabbitmq_management
		- http://localhost:15672/#/

2. Run subscriber app 
3. Run publisher app (does send some payload)
4. Check output of the subscriber app that should print the payload of the publisher
