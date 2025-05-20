pipeline {
    agent any
    environment {
        NODE_ENV = 'test'
    }
    stages {
        stage('Clone from GitHub') {
            steps {
                // Clone your GitHub repository
                git url: 'https://github.com/vidya1926/POM.git', branch: 'master'
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install'
            }
        }
        stage('Run Playwright Tests') {
            steps {
                bat 'npx playwright test tests/leads.spec.ts --reporter=html'
            }
        }
    }
    post {
        always {
            script {
                publishHTML(target: [
                    allowMissing: false,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: 'playwright-report',
                    reportFiles: 'index.html',
                    reportName: 'Playwright Test Report',
                    reportTitles: 'Test Execution Report'
                ])
            }
        }
    }
}
