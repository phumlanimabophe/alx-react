// Import the necessary functions and data for testing
import getAllNotificationsByUser, { normalized } from './notifications';

// Test suite for notifications in schema
describe('Tests for notifications in schema', () => {
    // Test case: Ensure the getAllNotificationsByUser function returns the right data corresponding to the given userId
    it('should return the right data corresponding with the given userId', () => {
        // Define the expected data for the given userId
        const expectedData = [
            // ... (add the expected data items)
        ];
        const userId = '5debd764a7c57c7839d722e9';

        // Call the function and check if it returns the expected data
        expect(getAllNotificationsByUser(userId)).toEqual(expectedData);
    });

    // Test case: Ensure the normalized result matches the expected list of results
    it('should match results', () => {
        // Define the expected list of results
        const results = [
            // ... (add the expected results)
        ];

        // Check if the normalized result matches the expected list of results
        expect(normalized.result).toEqual(results);
    });

    // Test case: Ensure the normalized entities have the correct user entity
    it('should have the correct users entity', () => {
        // Define the expected user entity
        const user = {
            // ... (add the expected user properties)
        };

        // Check if the normalized user entity matches the expected user entity
        expect(normalized.entities.users['5debd764a7c57c7839d722e9']).toEqual(user);
    });

    // Test case: Ensure the normalized entities have the correct message entity
    it('should have a correct messages entity', () => {
        // Define the expected message entity
        const message = {
            // ... (add the expected message properties)
        };

        // Check if the normalized message entity matches the expected message entity
        expect(normalized.entities.messages['efb6c485-00f7-4fdf-97cc-5e12d14d6c41']).toEqual(message);
    });

    // Test case: Ensure the normalized entities have the correct notification entity
    it('should have a correct notifications entity', () => {
        // Define the expected notification entity
        const notificationDummy = {
            // ... (add the expected notification properties)
        };

        // Check if the normalized notification entity matches the expected notification entity
        expect(normalized.entities.notification['5debd7642e815cd350407777']).toEqual(notificationDummy);
    });
});
