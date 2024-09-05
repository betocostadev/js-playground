// S.O.L.I.D. Principles
// 5 - D: Dependency Inversion Principle
// It states that high-level modules should not depend on low-level modules. Both should depend
// on abstractions (e.g., interfaces). Additionally, abstractions should not depend on details.
// Details should depend on abstractions.

// In simpler terms, the Dependency Inversion Principle suggests that:

// High-level modules (which contain complex logic) should not depend on low-level modules (which contain
// detailed implementation). Instead, both should depend on abstractions.

// This helps in creating a more flexible and maintainable system where high-level modules are not
// tightly coupled to the low-level modules.

// Low-level module
class OneEmailService {
  sendEmail(message) {
    console.log(`Sending email: ${message}`)
  }
}

// High-level module
class OneNotification {
  constructor() {
    this.newEmailService = new OneEmailService()
  }

  send(message) {
    this.newEmailService.sendEmail(message)
  }
}

const newNotification = new OneNotification()
newNotification.send('Hello, this is a notification!')

// WITH DEPENDENCY INVERSION PRINCIPLE
console.log(`
=== Using the Dependency Inversion Principle ===
`)

// Abstraction
class MessageService {
  sendMessage(message) {
    throw new Error('Method not implemented.')
  }
}

// Low-level module
class EmailService extends MessageService {
  sendMessage(message) {
    console.log(`Sending email: ${message}`)
  }
}

// Another low-level module
class SMSService extends MessageService {
  sendMessage(message) {
    console.log(`Sending SMS: ${message}`)
  }
}

// High-level module
class Notification {
  constructor(messageService) {
    this.messageService = messageService
  }

  send(message) {
    this.messageService.sendMessage(message)
  }
}

const emailService = new EmailService()
const smsService = new SMSService()

const emailNotification = new Notification(emailService)
emailNotification.send('Hello, this is an email notification!')

const smsNotification = new Notification(smsService)
smsNotification.send('Hello, this is an SMS notification!')
