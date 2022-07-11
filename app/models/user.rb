class User < ApplicationRecord
  has_secure_password

  validates :username, presence: true, uniqueness: true
  validates :password, presence:true, length: { minimum: 6 }
  validates :email, format: /\w+@\w+\.{1}[a-zA-Z]{2,}/, presence: true, uniqueness: true
  validate :permitted_emails

    def permitted_emails
        unless email.match?(/gmail.com|yahoo.com|icloud.com|aol.com|hotmail.com|ymail.com/)
            errors.add(:permitted_emails, "Sorry that email is not permitted.")
        end
    end
    
end
